import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderTracking from './components/OrderTracking';
import CustomizationModal from './components/CustomizationModal';
import { restaurantsData } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState('restaurants');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Advanced Features State
  const [favorites, setFavorites] = useState([]);
  const [vegOnly, setVegOnly] = useState(false);
  const [sortBy, setSortBy] = useState('none'); // 'none', 'rating', 'time'
  
  // Cart State (now handles quantities)
  const [cart, setCart] = useState([]);
  const [customizingDish, setCustomizingDish] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [orderStage, setOrderStage] = useState(0);

  const openMenu = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setActiveCategory('All');
    setCurrentView('menu');
    window.scrollTo(0, 0);
  };

  const toggleFavorite = (e, restId) => {
    e.stopPropagation(); // Prevent opening menu
    setFavorites(prev => prev.includes(restId) ? prev.filter(id => id !== restId) : [...prev, restId]);
  };

  const confirmAddToCart = () => {
    const existingItemIndex = cart.findIndex(item => 
      item.id === customizingDish.id && 
      JSON.stringify(item.selectedAddons) === JSON.stringify(selectedAddons)
    );

    if (existingItemIndex >= 0) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...customizingDish, selectedAddons, quantity: 1, cartId: Date.now() }]);
    }
    setCustomizingDish(null);
  };

  const updateQuantity = (cartId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) return { ...item, quantity: item.quantity + delta };
      return item;
    }).filter(item => item.quantity > 0));
  };

  const placeOrder = () => {
    setCurrentView('tracking');
    setOrderStage(0);
    setCart([]);
    window.scrollTo(0, 0);
  };

  const cartSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Apply Search, Filters, and Sorting
  let processedRestaurants = restaurantsData.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (r.tags && r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  if (sortBy === 'rating') processedRestaurants.sort((a, b) => b.rating - a.rating);
  if (sortBy === 'time') processedRestaurants.sort((a, b) => a.deliveryTime - b.deliveryTime);

  const filteredMenu = selectedRestaurant?.menu.filter(dish => 
    (activeCategory === 'All' || dish.category === activeCategory) &&
    dish.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!vegOnly || dish.isVeg)
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header 
        setCurrentView={setCurrentView}
        currentView={currentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartItemCount}
        cartSubtotal={cartSubtotal}
      />

      <main className="max-w-6xl mx-auto p-4 md:p-6 pb-20">
        {currentView === 'restaurants' && (
          <>
            {!searchQuery && <Hero />}
            
            {/* Advanced Filters */}
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium border ${sortBy === 'rating' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-700 border-gray-300'}`}
                onClick={() => setSortBy(prev => prev === 'rating' ? 'none' : 'rating')}
              >
                ⭐ Top Rated
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium border ${sortBy === 'time' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-700 border-gray-300'}`}
                onClick={() => setSortBy(prev => prev === 'time' ? 'none' : 'time')}
              >
                ⏱️ Fastest Delivery
              </button>
            </div>

            <RestaurantList 
              restaurants={processedRestaurants} 
              openMenu={openMenu} 
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          </>
        )}

        {currentView === 'menu' && selectedRestaurant && (
          <Menu 
            restaurant={selectedRestaurant}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            filteredMenu={filteredMenu}
            openCustomization={(dish) => { setCustomizingDish(dish); setSelectedAddons([]); }}
            vegOnly={vegOnly}
            setVegOnly={setVegOnly}
          />
        )}

        {currentView === 'checkout' && (
          <Cart 
            cart={cart} 
            cartSubtotal={cartSubtotal} 
            updateQuantity={updateQuantity}
            placeOrder={placeOrder} 
          />
        )}

        {currentView === 'tracking' && (
          <OrderTracking orderStage={orderStage} setOrderStage={setOrderStage} trackingStages={['Order Placed', 'Preparing Food', 'Out for Delivery', 'Delivered']} />
        )}
      </main>

      <CustomizationModal 
        dish={customizingDish}
        selectedAddons={selectedAddons}
        toggleAddon={(addon) => setSelectedAddons(prev => prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon])}
        closeModal={() => setCustomizingDish(null)}
        confirmAddToCart={confirmAddToCart}
      />
    </div>
  );
}