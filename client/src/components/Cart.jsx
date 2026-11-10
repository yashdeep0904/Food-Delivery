import React, { useState } from 'react';

export default function Cart({ cart, cartSubtotal, updateQuantity, placeOrder }) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [tip, setTip] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState('Home');
  const [instructions, setInstructions] = useState([]);

  const addresses = [
    { type: 'Home', text: 'Flat 402, Green Valley Apartments, MG Road' },
    { type: 'Work', text: 'Tech Park, Building B, 3rd Floor, Cyber City' }
  ];

  const toggleInstruction = (option) => {
    setInstructions(prev => 
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === 'FESTIVE50') {
      setDiscount(50);
    } else {
      alert('Invalid Code. Try "FESTIVE50".');
      setDiscount(0);
    }
  };

  const deliveryFee = cartSubtotal > 0 ? 40 : 0;
  const taxes = Math.round(cartSubtotal * 0.05);
  const finalTotal = cartSubtotal + deliveryFee + taxes + tip - discount;

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm max-w-2xl mx-auto border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout & Delivery</h2>
      
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
      ) : (
        <div>
          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.cartId} className="flex justify-between items-center border-b border-gray-100 pb-3">
                <div>
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-xs text-gray-500">₹{item.price} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-gray-100 rounded-md">
                    <button onClick={() => updateQuantity(item.cartId, -1)} className="px-2.5 py-0.5 text-red-600 font-bold">-</button>
                    <span className="px-2 text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartId, 1)} className="px-2.5 py-0.5 text-green-600 font-bold">+</button>
                  </div>
                  <span className="font-bold text-gray-800 w-16 text-right">₹{item.price * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Address Selector */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Select Delivery Address</h3>
            <div className="grid grid-cols-2 gap-3">
              {addresses.map(addr => (
                <div 
                  key={addr.type}
                  onClick={() => setSelectedAddress(addr.type)}
                  className={`p-3 rounded-xl border cursor-pointer transition ${selectedAddress === addr.type ? 'border-red-500 bg-red-50/50' : 'border-gray-200'}`}
                >
                  <p className="font-bold text-sm text-gray-800">🏠 {addr.type}</p>
                  <p className="text-xs text-gray-500 line-clamp-1">{addr.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Instructions */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Delivery Instructions</h3>
            <div className="flex flex-wrap gap-2">
              {['Leave at door', 'Avoid calling', 'Don\'t ring bell'].map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleInstruction(opt)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${instructions.includes(opt) ? 'bg-slate-800 text-white border-slate-800' : 'bg-gray-50 text-gray-600 border-gray-200'}`}
                >
                  {instructions.includes(opt) ? '✓ ' : '+ '}{opt}
                </button>
              ))}
            </div>
          </div>

          {/* Driver Tip */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">Tip Your Delivery Partner</h3>
            <div className="flex gap-3">
              {[20, 30, 50].map(amount => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setTip(tip === amount ? 0 : amount)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${tip === amount ? 'bg-red-500 text-white border-red-500' : 'bg-gray-50 text-gray-700 border-gray-200'}`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>
          </div>

          {/* Bill Summary */}
          <div className="space-y-2 text-sm text-gray-600 mb-6 border-t border-gray-100 pt-4">
            <div className="flex justify-between"><span>Item Total</span><span>₹{cartSubtotal}</span></div>
            <div className="flex justify-between"><span>Delivery Fee</span><span>₹{deliveryFee}</span></div>
            <div className="flex justify-between"><span>Taxes & Charges</span><span>₹{taxes}</span></div>
            {tip > 0 && <div className="flex justify-between text-red-500"><span>Driver Tip</span><span>+ ₹{tip}</span></div>}
            {discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>- ₹{discount}</span></div>}
          </div>

          <div className="flex justify-between items-center text-xl font-extrabold text-gray-900 mb-6 border-t border-gray-200 pt-4">
            <span>Grand Total</span>
            <span>₹{finalTotal}</span>
          </div>
          
          <button 
            className="w-full bg-red-600 text-white font-bold py-3.5 rounded-xl hover:bg-red-700 transition shadow-md"
            onClick={placeOrder}
          >
            Pay & Place Order • ₹{finalTotal}
          </button>
        </div>
      )}
    </div>
  );
}