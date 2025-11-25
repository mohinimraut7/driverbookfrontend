// import React, { useEffect, useState } from 'react';
// import bmwcar from '../assets/bmwcar.jpg';

// const loadScreenshot = async (filePath) => {
//   try {
//     const resp = await fetch(filePath);
//     const html = await resp.text();
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//     const img = doc.querySelector('img');
//     return img?.src || null; // base64 data URL
//   } catch (e) {
//     console.error('Failed to load:', filePath, e);
//     return null;
//   }
// };

// const Home = () => {
//   const [cards, setCards] = useState({
//     local: null,
//     outstation: null,
//     outstationDrop: null,
//     permanent: null,
//   });

//   useEffect(() => {
//     Promise.all([
//       loadScreenshot('/src/assets/localimg.jpg'),
//       loadScreenshot('/src/assets/outstationimg.html'),
//       loadScreenshot('/src/assets/outstationdrop.html'),
//       loadScreenshot('/src/assets/permanent.html'),
//     ]).then(([local, outstation, outstationDrop, permanent]) => {
//       setCards({ local, outstation, outstationDrop, permanent });
//     });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-400 to-white">

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
//             {cards.local ? (
//               <img src={cards.local} alt="Local" className="w-full h-40 object-cover" />
//             ) : (
//               <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
//                 Loading…
//               </div>
//             )}
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">LOCAL</h3>
//           </div>

//           {/* OUTSTATION */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
//             {cards.outstation ? (
//               <img src={cards.outstation} alt="Outstation" className="w-full h-40 object-cover" />
//             ) : (
//               <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
//                 Loading…
//               </div>
//             )}
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">OUTSTATION</h3>
//           </div>

//           {/* OUTSTATION DROP */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
//             {cards.outstationDrop ? (
//               <img src={cards.outstationDrop} alt="Outstation Drop" className="w-full h-40 object-cover" />
//             ) : (
//               <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
//                 Loading…
//               </div>
//             )}
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">OUTSTATION DROP</h3>
//           </div>

//           {/* PERMANENT */}
//           <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs">
//             {cards.permanent ? (
//               <img src={cards.permanent} alt="Permanent" className="w-full h-40 object-cover" />
//             ) : (
//               <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
//                 Loading…
//               </div>
//             )}
//             <h3 className="text-center py-3 font-semibold text-gray-800 text-lg">PERMANENT</h3>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


// =============================================================

import React from 'react';
import HPSOneFewClicks from './HPSOneFewClicks';
import HPSTwoHassleFree from './HPSTwoHassleFree';
import HPSThreeCitiesWeCater from './HPSThreeCitiesWeCater';
import HPFourWhatWeOffer from './HPFourWhatWeOffer';
import HPSectionFiveRentADriver from './HPSectionFiveRentADriver';
import HPSectionSixOurHappyClient from './HPSectionSixOurHappyClient';
import HPSectionSevenFeaturedIn from './HPSectionSevenFeaturedIn';


const Home = () => {
  return (
   <>
   <HPSOneFewClicks/>
   <HPSTwoHassleFree/>
   <HPSThreeCitiesWeCater/>
   <HPFourWhatWeOffer/>
   <HPSectionFiveRentADriver/>
   {/* <HPSectionSixOurHappyClient/> */}
   <HPSectionSevenFeaturedIn/>
   </>
  );
};

export default Home;