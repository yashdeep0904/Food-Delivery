import React from 'react';

export default function Header({ setCurrentView, currentView, searchQuery, setSearchQuery, cartCount, cartTotal }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 cursor-pointer tracking-tight" 
          onClick={() => setCurrentView('restaurants')}
        >
          FoodExpress
        </h1>
        
        {(currentView === 'restaurants' || currentView === 'menu') && (
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search for restaurants or dishes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 text-gray-800 border-transparent rounded-full pl-12 pr-6 py-2.5 w-[400px] focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none"
            />
            <span className="absolute left-4 top-3 text-gray-400">🔍</span>
          </div>
        )}
        
        <button 
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 hover:shadow-lg transition-all"
          onClick={() => setCurrentView('checkout')}
        >
          🛒 Cart 
          {cartCount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
          <span className="ml-2 border-l border-slate-600 pl-2">₹{cartTotal}</span>
        </button>
      </div>
    </header>
  );
}