// import React from 'react';

// const BookingFormModal = ({ open, onClose, service, city }) => {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">

//         {/* Close Button */}
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-black">
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="text-center mb-6">
//           <span className="inline-block px-6 py-2 bg-yellow-400 text-black font-bold rounded-full text-lg">
//             {service} - {city}
//           </span>
//         </div>

//         <h2 className="text-2xl font-bold text-center mb-8">Book Your Driver</h2>

//         <div className="space-y-6">
//           {/* Trip Type */}
//           <div className="flex justify-center gap-4">
//             <button className="px-6 py-3 bg-gray-200 rounded-full font-medium">Round Trip</button>
//             <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold">One Way</button>
//           </div>

//           {/* Pickup & Drop */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Pickup Location</label>
//             <input type="text" className="w-full px-4 py-3 border rounded-xl" placeholder="Enter pickup location" />
//           </div>

//           {/* Duty Hours */}
//           <div>
//             <label className="block text-sm font-medium mb-2">Select Duty Hours</label>
//             <div className="flex gap-3 justify-center">
//               {['2 hrs', '4 hrs', '8 hrs', '12 hrs'].map(hr => (
//                 <button key={hr} className="px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-yellow-400 hover:bg-yellow-50">
//                   {hr}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Date & Time */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Select Date</label>
//               <input type="date" className="w-full px-4 py-3 border rounded-xl" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Select Time</label>
//               <input type="time" className="w-full px-4 py-3 border rounded-xl" />
//             </div>
//           </div>

//           {/* Book Button */}
//           <button className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold rounded-2xl transition">
//             Book Driver Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingFormModal;

// =======================================================

import React from "react";

const BookingFormModal = ({ open, onClose, service, city }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose} // backdrop click closes
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()} // prevent close on inside click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block px-6 py-2 bg-yellow-400 text-black font-bold rounded-full text-lg shadow">
            {service} • {city}
          </span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Book Your Driver
        </h2>

        <div className="space-y-6">
          {/* Trip Type */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-gray-200 rounded-full font-medium hover:bg-gray-300 transition active:scale-95">
              Round Trip
            </button>
            <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-500 transition active:scale-95">
              One Way
            </button>
          </div>

          {/* Pickup */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Pickup Location
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
              placeholder="Enter pickup location"
            />
          </div>

          {/* Duty Hours */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Select Duty Hours
            </label>
            <div className="flex gap-3 justify-center flex-wrap">
              {["2 hrs", "4 hrs", "8 hrs", "12 hrs"].map((hr) => (
                <button
                  key={hr}
                  className="px-6 py-3 border-2 border-gray-300 rounded-xl hover:border-yellow-400 hover:bg-yellow-50 transition active:scale-95"
                >
                  {hr}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Select Time
              </label>
              <input
                type="time"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>
          </div>

          {/* Book Button */}
          <button className="w-full py-5 bg-yellow-400 hover:bg-yellow-500 text-black text-xl font-bold rounded-2xl transition active:scale-95 shadow-lg">
            Book Driver Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingFormModal;
