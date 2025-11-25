// import React from 'react';
// import bmwcar from '../assets/bmwcar.jpg';
// import localimg from '../assets/localimg.jpg';
// import outstationimg from '../assets/outstationimg.jpg';
// import outstationdrop from '../assets/outstationdrop.jpg';
// import permanent from '../assets/permanent.jpg';
// import SelectYourCityModal from '../components/Modal/SelectYourCity';





// const HPSOneFewClicks = () => {
//   return (
//      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-400 to-white">

//       {/* HERO SECTION */}
//       <section className="max-w-6xl mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
//         {/* Text */}
//         <div className="text-center md:text-left flex-1">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
//             FEW CLICKS AWAY TO BOOK A <br />
//             <span className="text-gray-900">EXPERIENCE</span>
//           </h1>
//         </div>

//         {/* Car Image */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src={bmwcar}
//             alt="Luxury BMW"
//             className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-2xl"
//           />
//         </div>
//       </section>

//       {/* SERVICE CARDS */}
//       <section className="max-w-6xl mx-auto px-5 pb-20">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">

//           {/* LOCAL */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
//             <img src={localimg} alt="Local" className="w-full h-40 object-cover" />
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">LOCAL</h3>
//           </div>

//           {/* OUTSTATION */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
//             <img src={outstationimg} alt="Outstation" className="w-full h-40 object-cover" />
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">OUTSTATION</h3>
//           </div>

//           {/* OUTSTATION DROP */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
//             <img src={outstationdrop} alt="Outstation Drop" className="w-full h-40 object-cover" />
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">OUTSTATION DROP</h3>
//           </div>

//           {/* PERMANENT */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
//             <img src={permanent} alt="Permanent" className="w-full h-40 object-cover" />
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">PERMANENT</h3>
//           </div>

//         </div>
//       </section>
//     </div>
//   )
// }

// export default HPSOneFewClicks


// ===============================================



// import React, { useState } from 'react';
// import bmwcar from '../assets/bmwcar.jpg';
// import localimg from '../assets/localimg.jpg';
// import outstationimg from '../assets/outstationimg.jpg';
// import outstationdrop from '../assets/outstationdrop.jpg';
// import permanent from '../assets/permanent.jpg';
// import SelectYourCityModal from '../components/Modal/SelectYourCity';

// const HPSOneFewClicks = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState('');

//   // Open modal + remember which card was clicked
//   const openCityModal = (service) => {
//     setSelectedService(service);
//     setIsModalOpen(true);
//   };

//   // Handle city selection
//   const handleCitySelect = (city) => {
//     console.log(`Service: ${selectedService} | City: ${city}`);
//     alert(`You selected: ${selectedService} in ${city}`);
//     setIsModalOpen(false);
//     // Later you can redirect: navigate(`/book?type=${selectedService}&city=${city}`)
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-400 to-white">

//         {/* HERO SECTION */}
//         <section className="max-w-6xl mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          
//           <div className="text-center md:text-left flex-1">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
//               FEW CLICKS AWAY TO BOOK A <br />
//               <span className="text-gray-900">EXPERIENCE</span>
//             </h1>
//           </div>

//           <div className="flex-1 flex justify-center">
//             <img
//               src={bmwcar}
//               alt="Luxury BMW"
//               className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-2xl"
//             />
//           </div>
//         </section>

//         {/* SERVICE CARDS - NOW CLICKABLE */}
//         <section className="max-w-6xl mx-auto px-5 pb-20">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">

//             {/* LOCAL */}
//             <div
//               onClick={() => openCityModal('LOCAL')}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
//             >
//               <img src={localimg} alt="Local" className="w-full h-40 object-cover" />
//               <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
//                 LOCAL
//               </h3>
//             </div>

//             {/* OUTSTATION */}
//             <div
//               onClick={() => openCityModal('OUTSTATION')}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
//             >
//               <img src={outstationimg} alt="Outstation" className="w-full h-40 object-cover" />
//               <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
//                 OUTSTATION
//               </h3>
//             </div>

//             {/* OUTSTATION DROP */}
//             <div
//               onClick={() => openCityModal('OUTSTATION DROP')}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
//             >
//               <img src={outstationdrop} alt="Outstation Drop" className="w-full h-40 object-cover" />
//               <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
//                 OUTSTATION DROP
//               </h3>
//             </div>

//             {/* PERMANENT */}
//             <div
//               onClick={() => openCityModal('PERMANENT')}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
//             >
//               <img src={permanent} alt="Permanent" className="w-full h-40 object-cover" />
//               <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
//                 PERMANENT
//               </h3>
//             </div>

//           </div>
//         </section>
//       </div>

//       {/* SELECT CITY MODAL */}
//       <SelectYourCityModal
//         open={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSelectCity={handleCitySelect}
//       />
//     </>
//   );
// };

// export default HPSOneFewClicks;

// =======================================

import React, { useState } from 'react';
import bmwcar from '../assets/bmwcar.jpg';
import localimg from '../assets/localimg.jpg';
import outstationimg from '../assets/outstationimg.jpg';
import outstationdrop from '../assets/outstationdrop.jpg';
import permanent from '../assets/permanent.jpg';

import SelectYourCityModal from '../components/Modal/SelectYourCity';
import BookingFormModal from '../components/Modal/BookingFormModal';

const HPSOneFewClicks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);          // City selector modal
  const [isBookingOpen, setIsBookingOpen] = useState(false);      // Booking form modal
  const [selectedService, setSelectedService] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Open city modal when a service card is clicked
  const openCityModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Handle city selection
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsModalOpen(false);
    setIsBookingOpen(true);  // <-- MAIN FIX (Open booking modal)
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-400 to-white">

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-5 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              FEW CLICKS AWAY TO BOOK A <br />
              <span className="text-gray-900">EXPERIENCE</span>
            </h1>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={bmwcar}
              alt="Luxury BMW"
              className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* SERVICE CARDS */}
        <section className="max-w-6xl mx-auto px-5 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">

            <div
              onClick={() => openCityModal('LOCAL')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
            >
              <img src={localimg} alt="Local" className="w-full h-40 object-cover" />
              <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
                LOCAL
              </h3>
            </div>

            <div
              onClick={() => openCityModal('OUTSTATION')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
            >
              <img src={outstationimg} alt="Outstation" className="w-full h-40 object-cover" />
              <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
                OUTSTATION
              </h3>
            </div>

            <div
              onClick={() => openCityModal('OUTSTATION DROP')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
            >
              <img src={outstationdrop} alt="Outstation Drop" className="w-full h-40 object-cover" />
              <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
                OUTSTATION DROP
              </h3>
            </div>

            <div
              onClick={() => openCityModal('PERMANENT')}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 hover:scale-105 w-full max-w-xs"
            >
              <img src={permanent} alt="Permanent" className="w-full h-40 object-cover" />
              <h3 className="text-center py-4 font-bold text-xl text-gray-800 bg-gradient-to-b from-yellow-50 to-white">
                PERMANENT
              </h3>
            </div>

          </div>
        </section>
      </div>

      {/* CITY SELECT MODAL */}
      <SelectYourCityModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectCity={handleCitySelect}
      />

      {/* BOOKING FORM MODAL */}
      <BookingFormModal
        open={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        service={selectedService}
        city={selectedCity}
      />
    </>
  );
};

export default HPSOneFewClicks;
