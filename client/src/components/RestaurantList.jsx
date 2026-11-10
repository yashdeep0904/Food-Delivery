import React from 'react';

export default function RestaurantList({ restaurants, openMenu, favorites, toggleFavorite }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Top Restaurants Near You</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map(rest => (
          <div 
            key={rest.id} 
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 flex flex-col relative"
            onClick={() => openMenu(rest)}
          >
            {/* Heart / Favorite Button */}
            <button 
              onClick={(e) => toggleFavorite(e, rest.id)}
              className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm hover:bg-white transition"
            >
              {favorites.includes(rest.id) ? '❤️' : '🤍'}
            </button>

            <div className="relative h-56 overflow-hidden">
              <img src={rest.image} alt={rest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md font-bold text-sm shadow-md flex items-center gap-1 text-gray-800">
                <span className="text-green-600">★</span> {rest.rating}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{rest.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{rest.tags?.join(', ')}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-sm font-medium text-gray-600">
                <div className="flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-full">
                  ⏱️ {rest.deliveryTime} mins
                </div>
                <div className="text-red-500 group-hover:text-red-600 font-semibold flex items-center gap-1">
                  View Menu →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}