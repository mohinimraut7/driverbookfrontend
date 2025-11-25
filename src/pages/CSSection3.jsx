// import React, { useState } from 'react';

// const CSSection3 = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const services = [
//     {
//       id: 'hourly',
//       title: 'HOURLY DRIVERS',
//       icon: (
//         <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z" stroke="#FBBF24" strokeWidth="4" fill="none"/>
//           <path d="M32 16V32L40 40" stroke="#1F2937" strokeWidth="4" strokeLinecap="round"/>
//         </svg>
//       ),
//       description: "For quick trips or errands, book a car driver on an hourly basis. Our professional drivers will be ready to take you where you need to go promptly, without delay."
//     },
//     {
//       id: 'outstation',
//       title: 'OUTSTATION DRIVERS',
//       icon: (
//         <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z" stroke="#FBBF24" strokeWidth="4" fill="none"/>
//           <path d="M20 32H44M32 20V44" stroke="#1F2937" strokeWidth="4" strokeLinecap="round"/>
//         </svg>
//       ),
//       description: "Need to travel long-distance? Our outstation drivers are experienced in handling extended trips, ensuring a safe and comfortable journey to any destination."
//     },
//     {
//       id: 'daily',
//       title: 'DAILY DRIVERS',
//       icon: (
//         <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="32" cy="32" r="26" stroke="#FBBF24" strokeWidth="4" fill="none"/>
//           <path d="M32 20V32L38 38" stroke="#10B981" strokeWidth="4" strokeLinecap="round"/>
//         </svg>
//       ),
//       description: "For your regular commute, our daily drivers know the best routes around Mumbai. They'll help you avoid traffic and get to your destination on time, every day."
//     },
//     {
//       id: 'temporary',
//       title: 'TEMPORARY DRIVERS',
//       icon: (
//         <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect x="14" y="20" width="36" height="24" rx="4" stroke="#F59E0B" strokeWidth="4"/>
//           <path d="M22 28H42" stroke="#1F2937" strokeWidth="3"/>
//           <path d="M28 36H36" stroke="#1F2937" strokeWidth="3"/>
//         </svg>
//       ),
//       description: "Whether it's for a wedding, meeting, or special event, our temporary drivers are available for short-term bookings, providing hassle-free, professional service tailored to your needs."
//     },
//     {
//       id: 'night',
//       title: 'NIGHT DRIVERS',
//       icon: (
//         <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="32" cy="32" r="26" stroke="#FBBF24" strokeWidth="4" fill="none"/>
//           <path d="M32 10V6M32 58V54M10 32H6M58 32H54M16.36 16.36L13.64 13.64M50.36 50.36L47.64 47.64M16.36 47.64L13.64 50.36M50.36 13.64L47.64 16.36" stroke="#1F2937" strokeWidth="3"/>
//           <path d="M44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32C20 25.3726 25.3726 20 32 20C38.6274 20 44 25.3726 44 32Z" fill="#1F2937"/>
//         </svg>
//       ),
//       description: "Whether it's a late-night party or a business meeting, our night drivers are ready to get you home safely at any hour."
//     },
//     {
//       id: 'permanent',
//       title: 'PERMANENT DRIVERS',
//       icon: (
//         <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M42 32H22M42 32L34 40M42 32L34 24" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
//           <path d="M22 32H42H22Z" stroke="#1F2937" strokeWidth="4"/>
//         </svg>
//       ),
//       description: "If you need a driver on a long-term basis, our permanent drivers are here for you. They'll take care of your daily commute, so you can enjoy a stress-free ride every day."
//     }
//   ];

//   // const cities = ['MUMBAI', 'NAVI MUMBAI', 'THANE', 'PUNE'];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* Title */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
//           Types of Driver Services in Mumbai
//         </h2>

//         {/* Description */}
//         <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
//           Need to hire drivers in Mumbai? We've got you covered. Our experienced drivers are trained to provide a safe, comfortable, and efficient driver service. Choose the service that fits your needs.
//         </p>

//         {/* City Dropdown */}
//         {/* <div className="flex justify-center mb-12">
//           <div className="relative inline-block">
//             <select className="appearance-none bg-white border-2 border-dashed border-gray-300 rounded-lg px-6 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:border-yellow-500 transition">
//               {cities.map(city => (
//                 <option key={city} value={city}>{city}</option>
//               ))}
//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//               <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
//               </svg>
//             </div>
//           </div>
//         </div> */}

//         {/* Service Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className={`relative bg-white rounded-lg p-8 transition-all duration-300 cursor-pointer
//                 ${hoveredCard === service.id 
//                   ? 'ring-4 ring-yellow-400 ring-offset-2 shadow-xl' 
//                   : 'border-2 border-dashed border-gray-300 hover:border-yellow-400'
//                 }`}
//               onMouseEnter={() => setHoveredCard(service.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="flex flex-col items-center text-center space-y-4">
//                 <div className="text-yellow-500">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">
//                   {service.title}
//                 </h3>
                
//                 {/* Description - Only show when hovered */}
//                 {hoveredCard === service.id && (
//                   <div className="absolute inset-0 bg-white rounded-lg p-6 flex flex-col justify-center items-center text-left z-10 shadow-2xl border-4 border-yellow-400">
//                     <p className="text-sm text-gray-700 leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Text */}
//         <p className="text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
//           With our diverse driver services in Mumbai, you can easily find the right driver for your needs. Book today and enjoy a smooth, reliable ride.
//         </p>

//         {/* Scroll to Top Button */}
//         <button className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-black w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CSSection3;


// ==============================================================================



// src/components/CSSection3.jsx
import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";

/* -----------------------------------------------------------------
   City data – keep the same structure you already have in
   CitySpecificSection1.  Put the images in src/assets/
----------------------------------------------------------------- */
import mumbaicity from "../assets/mumbaicity.jpg";
import navimumbaicity from "../assets/navimumbaicity.jpg";
import thanecity from "../assets/thanecity.jpg";
import punecity from "../assets/punecity.jpg";

const cityInfo = {
  mumbai: { name: "Mumbai", image: mumbaicity },
  "navi-mumbai": { name: "Navi Mumbai", image: navimumbaicity },
  thane: { name: "Thane", image: thanecity },
  pune: { name: "Pune", image: punecity },
};

const CSSection3 = () => {
  const { cityName } = useParams();                         // <-- same as CitySpecificSection1
  const city = cityInfo[cityName] || cityInfo.mumbai;       // fallback

  const [hoveredCard, setHoveredCard] = useState(null);

  /* ---------------------------------------------------------------
     Service cards – only the “DAILY DRIVERS” description uses the city
  --------------------------------------------------------------- */
  const services = useMemo(
    () => [
      {
        id: "hourly",
        title: "HOURLY DRIVERS",
        icon: (
          <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z" stroke="#FBBF24" strokeWidth="4" fill="none"/>
            <path d="M32 16V32L40 40" stroke="#1F2937" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        ),
        description: "For quick trips or errands, book a car driver on an hourly basis. Our professional drivers will be ready to take you where you need to go promptly, without delay."
      },
      {
        id: "outstation",
        title: "OUTSTATION DRIVERS",
        icon: (
          <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 58C46.3594 58 58 46.3594 58 32C58 17.6406 46.3594 6 32 6C17.6406 6 6 17.6406 6 32C6 46.3594 17.6406 58 32 58Z" stroke="#FBBF24" strokeWidth="4" fill="none"/>
            <path d="M20 32H44M32 20V44" stroke="#1F2937" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        ),
        description: "Need to travel long-distance? Our outstation drivers are experienced in handling extended trips, ensuring a safe and comfortable journey to any destination."
      },
      {
        id: "daily",
        title: "DAILY DRIVERS",
        icon: (
          <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="26" stroke="#FBBF24" strokeWidth="4" fill="none"/>
            <path d="M32 20V32L38 38" stroke="#10B981" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        ),
        description: `For your regular commute, our daily drivers know the best routes around ${city.name}. They'll help you avoid traffic and get to your destination on time, every day.`
      },
      {
        id: "temporary",
        title: "TEMPORARY DRIVERS",
        icon: (
          <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" y="20" width="36" height="24" rx="4" stroke="#F59E0B" strokeWidth="4"/>
            <path d="M22 28H42" stroke="#1F2937" strokeWidth="3"/>
            <path d="M28 36H36" stroke="#1F2937" strokeWidth="3"/>
          </svg>
        ),
        description: "Whether it's for a wedding, meeting, or special event, our temporary drivers are available for short-term bookings, providing hassle-free, professional service tailored to your needs."
      },
      {
        id: "night",
        title: "NIGHT DRIVERS",
        icon: (
          <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="26" stroke="#FBBF24" strokeWidth="4" fill="none"/>
            <path d="M32 10V6M32 58V54M10 32H6M58 32H54M16.36 16.36L13.64 13.64M50.36 50.36L47.64 47.64M16.36 47.64L13.64 50.36M50.36 13.64L47.64 16.36" stroke="#1F2937" strokeWidth="3"/>
            <path d="M44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32C20 25.3726 25.3726 20 32 20C38.6274 20 44 25.3726 44 32Z" fill="#1F2937"/>
          </svg>
        ),
        description: "Whether it's a late-night party or a business meeting, our night drivers are ready to get you home safely at any hour."
      },
      {
        id: "permanent",
        title: "PERMANENT DRIVERS",
        icon: (
          <svg className="w-16 h-16 mx-auto" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42 32H22M42 32L34 40M42 32L34 24" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round"/>
            <path d="M22 32H42H22Z" stroke="#1F2937" strokeWidth="4"/>
          </svg>
        ),
        description: "If you need a driver on a long-term basis, our permanent drivers are here for you. They'll take care of your daily commute, so you can enjoy a stress-free ride every day."
      },
    ],
    [city.name]
  );

  /* ---------------------------------------------------------------
     City selector (optional – you can keep it or comment it out)
  --------------------------------------------------------------- */
  const cityOptions = Object.values(cityInfo).map(c => c.name);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Title – dynamic */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Types of Driver Services in {city.name}
        </h2>

        {/* Intro paragraph – dynamic */}
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          Need to hire drivers in {city.name}? We've got you covered. Our experienced drivers are trained to provide a safe, comfortable, and efficient driver service. Choose the service that fits your needs.
        </p>

        {/* City dropdown (optional) */}
        {/* <div className="flex justify-center mb-12">
          <div className="relative inline-block">
            <select
              className="appearance-none bg-white border-2 border-dashed border-gray-300 rounded-lg px-6 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:border-yellow-500 transition"
              value={city.name}
              onChange={e => {
                const selected = Object.entries(cityInfo).find(
                  ([, v]) => v.name === e.target.value
                )?.[0];
                if (selected) {
                  window.location.href = `/drivers-in-${selected}`;
                }
              }}
            >
              {cityOptions.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </div>
        </div> */}

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map(service => (
            <div
              key={service.id}
              className={`relative bg-white rounded-lg p-8 transition-all duration-300 cursor-pointer
                ${hoveredCard === service.id
                  ? "ring-4 ring-yellow-400 ring-offset-2 shadow-xl"
                  : "border-2 border-dashed border-gray-300 hover:border-yellow-400"
                }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-yellow-500">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider">
                  {service.title}
                </h3>

                {/* Hover description */}
                {hoveredCard === service.id && (
                  <div className="absolute inset-0 bg-white rounded-lg p-6 flex flex-col justify-center items-center text-left z-10 shadow-2xl border-4 border-yellow-400">
                    <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom paragraph – dynamic */}
        <p className="text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
          With our diverse driver services in {city.name}, you can easily find the right driver for your needs. Book today and enjoy a smooth, reliable ride.
        </p>

        {/* Scroll-to-top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-black w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CSSection3;