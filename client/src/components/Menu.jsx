import React from 'react';

export default function Menu({ restaurant, activeCategory, setActiveCategory, filteredMenu, openCustomization, vegOnly, setVegOnly }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">{restaurant.name} Menu</h2>
        {/* Veg Only Toggle */}
        <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
          <input 
            type="checkbox" 
            className="w-4 h-4 accent-green-600"
            checked={vegOnly}
            onChange={(e) => setVegOnly(e.target.checked)}
          />
          <span className="font-semibold text-gray-700 text-sm">Veg Only 🟢</span>
        </label>
      </div>
      
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
        <button 
          className={`px-5 py-2 rounded-full whitespace-nowrap border ${activeCategory === 'All' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-700 border-gray-300'}`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {restaurant.categories.map(cat => (
          <button 
            key={cat} 
            className={`px-5 py-2 rounded-full whitespace-nowrap border ${activeCategory === cat ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-700 border-gray-300'}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredMenu.map(dish => (
          <div key={dish.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              {/* India Standard Veg/Non-Veg Indicator */}
              <div className={`w-4 h-4 border-2 flex items-center justify-center mb-2 ${dish.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                <div className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800">{dish.name}</h3>
              <p className="text-gray-600 mt-1 font-medium">₹{dish.price}</p>
            </div>
            <button 
              className="bg-red-50 text-red-600 font-bold px-6 py-2 rounded-md border border-red-200 hover:bg-red-600 hover:text-white transition"
              onClick={() => openCustomization(dish)}
            >
              ADD
            </button>
          </div>
        ))}
        {filteredMenu.length === 0 && <p className="col-span-2 text-center text-gray-500 py-10">No items match your criteria.</p>}
      </div>
    </div>
  );
}