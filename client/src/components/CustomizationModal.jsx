import React from 'react';

// Added selectedAddons = [] default prop
export default function CustomizationModal({ dish, selectedAddons = [], toggleAddon, closeModal, confirmAddToCart }) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Customize {dish.name}</h3>
        
        <div className="flex flex-col gap-3 my-6">
          {/* Added optional chaining (?.) just in case a dish has no addons in your database */}
          {dish.addons?.map(addon => (
            <label key={addon} className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
              <input 
                type="checkbox" 
                className="w-5 h-5 accent-red-500"
                checked={selectedAddons?.includes(addon)}
                onChange={() => toggleAddon(addon)}
              />
              <span className="text-gray-700 font-medium">{addon}</span>
            </label>
          ))}
        </div>
        
        <div className="flex justify-end gap-3 mt-8">
          <button 
            onClick={closeModal}
            className="px-5 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-md transition"
          >
            Cancel
          </button>
          <button 
            onClick={confirmAddToCart} 
            className="bg-red-600 text-white px-5 py-2 rounded-md font-medium hover:bg-red-700 transition"
          >
            Add to Cart - ₹{dish.price}
          </button>
        </div>
      </div>
    </div>
  );
}