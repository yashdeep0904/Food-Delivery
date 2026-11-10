import React from 'react';

// Added default empty array for trackingStages to prevent .length errors
export default function OrderTracking({ orderStage = 0, setOrderStage, trackingStages = [] }) {
  // Safety check to avoid division by zero or rendering if stages are missing
  if (!trackingStages || trackingStages.length === 0) return null;

  const progressWidth = `${(orderStage / (trackingStages.length - 1)) * 100}%`;

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-10 text-center">Order Status</h2>
      
      <div className="relative flex justify-between items-center mb-12">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gray-200 z-0"></div>
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-teal-500 z-0 transition-all duration-500"
          style={{ width: progressWidth }}
        ></div>
        
        {trackingStages.map((stage, index) => (
          <div key={stage} className="relative z-10 flex flex-col items-center w-1/4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-3 transition-colors duration-500 ${index <= orderStage ? 'bg-teal-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {index + 1}
            </div>
            <p className={`text-xs md:text-sm font-medium text-center ${index <= orderStage ? 'text-gray-800' : 'text-gray-400'}`}>
              {stage}
            </p>
          </div>
        ))}
      </div>
      
      {orderStage < trackingStages.length - 1 && (
        <div className="text-center mt-8">
          <button 
            onClick={() => setOrderStage(prev => prev + 1)} 
            className="bg-orange-400 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-500 transition"
          >
            Simulate Next Stage
          </button>
        </div>
      )}
    </div>
  );
}