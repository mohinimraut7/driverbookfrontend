import React from 'react';
import locationicon from '../assets/locationicon.jpg';

const HPSThreeCitiesWeCater = () => {
  const cities = [
    { name: 'Mumbai', icon: locationicon },
    { name: 'Navi Mumbai', icon: locationicon },
    { name: 'Thane', icon: locationicon },
    { name: 'Pune', icon: locationicon },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5E55A3] mb-4">
          Cities We Cater
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto mb-10 leading-relaxed">
          We are committed to providing the best possible services in all cities. Driveronhire provides corporate drivers in Mumbai for business travel, airport transfers, long/short term stays, and excursions.
        </p>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <div className="mb-3 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                <img
                  src={city.icon}
                  alt={`${city.name} location`}
                  className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-lg transition-shadow"
                />
              </div>
              <p className="text-gray-800 font-medium text-sm md:text-base">
                {city.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HPSThreeCitiesWeCater;