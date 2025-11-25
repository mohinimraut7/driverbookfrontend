// import React from 'react';

// const SelectYourCityModal = ({ open, onClose, onSelectCity }) => {
//   if (!open) return null;

//   const cities = [
//     { name: "Mumbai", emoji: "Mumbai" },
//     { name: "Pune",   emoji: "Pune" },
//     { name: "Nashik", emoji: "Nashik" },
//     { name: "Nagpur", emoji: "Nagpur" },
//   ];

//   return (
//     // Backdrop
//     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 overflow-y-auto">
      
//       {/* Modal Card */}
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto p-6 md:p-8 relative animate-in fade-in zoom-in duration-300">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Select Your City</h2>
//           <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
//         </div>

//         {/* City Grid */}
//         <div className="grid grid-cols-2 gap-6">
//           {cities.map((city) => (
//             <div
//               key={city.name}
//               onClick={() => {
//                 onSelectCity(city.name);
//                 onClose();
//               }}
//               className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:from-yellow-50 hover:to-amber-100 border-4 border-transparent hover:border-yellow-400"
//             >
//               {/* Big City Icon */}
//               <div className="text-2xl mb-4 group-hover:animate-bounce">
//                 {city.emoji}
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-900">
//                 {city.name}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <p className="text-center text-gray-500 text-sm mt-10 font-medium">
//           More cities coming soon...
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SelectYourCityModal;



// ==================================================================


// import React from 'react';
// import BookingFormModal from './BookingFormModal';




// const SelectYourCityModal = ({ open, onClose, onSelectCity }) => {
//   if (!open) return null;

//   const cities = [
//     {
//       name: "Mumbai",
//       icon: (
//         <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
//         </svg>
//       )
//     },
//     {
//       name: "Pune",
//       icon: (
//         <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//         </svg>
//       )
//     },
//     {
//       name: "Nashik",
//       icon: (
//         <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
//         </svg>
//       )
//     },
//     {
//       name: "Nagpur",
//       icon: (
//         <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5z"/>
//         </svg>
//       )
//     },
//     // Add more cities as needed
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
//       <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto p-8 relative">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
//         >
//           <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         {/* Header */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-800">Select Your City</h2>
//           <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
//         </div>

//         {/* City Grid */}
//         <div className="grid grid-cols-2 gap-6">
//           {cities.map((city) => (
//             <div
//               key={city.name}
//               onClick={() => {
//                 onSelectCity(city.name);
//                 onClose();
//               }}
//               className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:from-yellow-50 hover:to-amber-100 border-4 border-transparent hover:border-yellow-400"
//             >
//               {/* REAL ICON with Bounce */}
//               <div className="mb-4 group-hover:animate-bounce transition-transform">
//                 {city.icon}
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-900">
//                 {city.name}
//               </h3>
//             </div>
//           ))}
//         </div>

//         <p className="text-center text-gray-500 text-sm mt-10 font-medium">
//           More cities coming soon...
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SelectYourCityModal;



// ============================================================

// import React, { useState } from 'react';
// import BookingFormModal from './BookingFormModal';

// const SelectYourCityModal = ({ open, onClose, onSelectCity }) => {
//   const [openBooking, setOpenBooking] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("");
//   const selectedService = "Local Mumbai"; // तू हवे असल्यास dynamic करू शकतेस

//   if (!open) return null;

//   const cities = [
//     {
//       name: "Mumbai",
//       icon: (
//         <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
//         </svg>
//       )
//     },
//     {
//       name: "Pune",
//       icon: (
//         <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//         </svg>
//       )
//     },
//     {
//       name: "Nashik",
//       icon: (
//         <svg className="w-16 h-16 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
//         </svg>
//       )
//     },
//     {
//       name: "Nagpur",
//       icon: (
//         <svg className="w-16 h-16 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5z"/>
//         </svg>
//       )
//     },
//   ];

//   return (
//     <>
//       {/* MAIN CITY SELECT MODAL */}
//       <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-start justify-center pt-16 md:pt-24 px-4">
//         <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto p-8 relative">

//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
//           >
//             <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Header */}
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-gray-800">Select Your City</h2>
//             <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
//           </div>

//           {/* City Grid */}
//           <div className="grid grid-cols-2 gap-6">
//             {cities.map((city) => (
//               <div
//                 key={city.name}
//                 onClick={() => {
//                   onSelectCity(city.name); 
//                   setSelectedCity(city.name);
//                   setOpenBooking(true);   // **OPEN BOOKING MODAL**
//                   onClose();              // Close city modal
//                 }}
//                 className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:from-yellow-50 hover:to-amber-100 border-4 border-transparent hover:border-yellow-400"
//               >
//                 <div className="mb-4 group-hover:animate-bounce transition-transform">
//                   {city.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-900">
//                   {city.name}
//                 </h3>
//               </div>
//             ))}
//           </div>

//           <p className="text-center text-gray-500 text-sm mt-10 font-medium">
//             More cities coming soon...
//           </p>
//         </div>
//       </div>

//       {/* BOOKING FORM MODAL */}
//       <BookingFormModal
//         open={openBooking}
//         onClose={() => setOpenBooking(false)}
//         service={selectedService}
//         city={selectedCity}
//       />
//     </>
//   );
// };

// export default SelectYourCityModal;

// ===================================================

// import React from "react";

// const SelectYourCityModal = ({ open, onClose, onSelectCity }) => {
//   if (!open) return null;

//   const cities = ["Mumbai", "Pune", "Nashik", "Nagpur", "Thane"];

//   const handleBackdropClick = (e) => {
//     // Prevent closing if clicked inside modal content
//     e.stopPropagation();
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       onClick={onClose}  // only backdrop click closes modal
//     >
//       <div
//         className="bg-white p-6 rounded-xl w-80 shadow-xl"
//         onClick={handleBackdropClick} // clicking inside DOES NOT close modal
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Select Your City</h2>

//         <div className="grid grid-cols-1 gap-3">
//           {cities.map((city) => (
//             <button
//               key={city}
//               className="py-2 px-4 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg"
//               onClick={() => onSelectCity(city)}
//             >
//               {city}
//             </button>
//           ))}
//         </div>

//         <button
//           className="mt-5 w-full py-2 bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectYourCityModal;


// ==================================================

import React from "react";

const SelectYourCityModal = ({ open, onClose, onSelectCity }) => {
  if (!open) return null;

  const cities = ["Mumbai", "Pune", "Nashik", "Nagpur", "Thane"];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}  // Backdrop click closes modal
    >
      <div
        className="bg-white p-6 rounded-2xl w-80 shadow-2xl transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent inside click close
      >
        {/* Title */}
        <h2 className="text-2xl font-bold mb-5 text-center text-gray-900">
          Select Your City
        </h2>

        {/* City Buttons */}
        <div className="grid grid-cols-1 gap-3">
          {cities.map((city) => (
            <button
              key={city}
              className="py-3 px-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl shadow-md transition-all active:scale-95"
              onClick={() => onSelectCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Close Button */}
        <button
          className="mt-6 w-full py-2.5 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-xl font-semibold shadow-sm transition-all active:scale-95"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SelectYourCityModal;

