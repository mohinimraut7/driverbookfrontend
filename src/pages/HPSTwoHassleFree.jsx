import React, { useState } from 'react';
import policeverifieddrivers from '../assets/policeverifieddrivers.jpg';
import happyclients from '../assets/happyclients.jpg';
import permanentdrivers from '../assets/permanentdrivers.jpg';

const HPSTwoHassleFree = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = "Welcome to Driver on Hire! With our driver on call service, you can say goodbye to the hassles of driving, parking, and navigating through traffic. If you're looking for a driver for rent near you, we have you covered. Our mission is to provide top-notch chauffeur services that meet all your commuting needs.";
  
  const fullText = `Welcome to Driver on Hire! With our driver on call service, you can say goodbye to the hassles of driving, parking, and navigating through traffic. If you're looking for a driver for rent near you, we have you covered. Our mission is to provide top-notch chauffeur services that meet all your commuting needs.

So whether it be for a special event, important business meeting, or simply need a break from driving. Experience convenient traveling within a few clicks. As you can rent a driver service that caters to your specific requirements.

We take pride in our commitment to excellence and providing you a comfortable journey. Our drivers are meticulously trained, licensed with all the valid documentation. Not only that they have extensive knowledge of local routes and traffic patterns, guaranteeing you a smooth and efficient ride.

So if you are looking for a driver near me? Our professional drivers are available in your area to provide convenient and safe transportation. Simply book a driver online and enjoy a stress-free journey to your destination. Our team of skilled drivers are dedicated and prioritize your safety, comfort in every step of the way. We understand that your time is valuable, and our professional drivers are here to ensure that you make the most of it.

So what's holding you back? Experience the convenience of renting a driver who will go above and beyond to make your journey safe. Trust our driver on call service for all your commuting needs. Sit back, relax, and arrive at your destination with ease.`;

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5E55A3] mb-6">
          Hassle-free Commute with #1 <span className="block mt-2">Driver Service by our Professional Drivers</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-6">
          {isExpanded ? fullText : shortText}
        </p>

        {/* Read More / Less Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#5E55A3] font-semibold hover:underline mb-10 block mx-auto"
        >
          {isExpanded ? '...Read Less' : 'Read More...'}
        </button>

        {/* Badges Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Police Verified Drivers */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={policeverifieddrivers} 
              alt="Police Verified Drivers" 
              className="w-16 mx-auto mb-3"
            />
            <p className="text-2xl md:text-3xl font-bold text-gray-800">20000+</p>
            <p className="text-sm md:text-base text-gray-600 font-medium">POLICE VERIFIED DRIVERS</p>
          </div>

          {/* Happy Clients */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={happyclients} 
              alt="Happy Clients" 
              className="w-16 mx-auto mb-3"
            />
            <p className="text-2xl md:text-3xl font-bold text-gray-800">5 LAC+</p>
            <p className="text-sm md:text-base text-gray-600 font-medium">HAPPY CLIENTS</p>
          </div>

          {/* Permanent Drivers */}
          <div className="bg-white border-2 border-yellow-400 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={permanentdrivers} 
              alt="Permanent Drivers" 
              className="w-16 mx-auto mb-3"
            />
            <p className="text-2xl md:text-3xl font-bold text-gray-800">1 LAC+</p>
            <p className="text-sm md:text-base text-gray-600 font-medium">PERMANENT DRIVERS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HPSTwoHassleFree;