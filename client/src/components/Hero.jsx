import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 mb-10 overflow-hidden shadow-xl flex items-center">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gradient-to-bl from-red-500 to-orange-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-teal-500 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-2xl">
        <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-400 font-semibold text-sm mb-4 border border-red-500/30">
          🚀 Lightning Fast Delivery
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Craving something <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">delicious?</span>
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          Get the best food from top restaurants delivered straight to your door in minutes.
        </p>
      </div>
    </div>
  );
}