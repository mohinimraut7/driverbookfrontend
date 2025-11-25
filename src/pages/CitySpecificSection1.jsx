import React from "react";
import { useParams, Link } from "react-router-dom";

// Import city illustrations
import mumbaicity from "../assets/mumbaicity.jpg";
import navimumbaicity from "../assets/navimumbaicity.jpg";
import thanecity from "../assets/thanecity.jpg";
import punecity from "../assets/punecity.jpg";

const cityData = {
  mumbai: {
    name: "Mumbai",
    tagline: "Hire a Driver in Mumbai - The City That Never Stops Moving",
    image: mumbaicity,
    alt: "Gateway of India, Mumbai",
  },
  "navi-mumbai": {
    name: "Navi Mumbai",
    tagline: "Reliable Driver Service in Navi Mumbai - Safe & On-Time",
    image: navimumbaicity,
    alt: "Navi Mumbai skyline",
  },
  thane: {
    name: "Thane",
    tagline: "Trusted Drivers in Thane - Comfortable Rides, Every Time",
    image: thanecity,
    alt: "Thane lakes and skyline",
  },
  pune: {
    name: "Pune",
    tagline: "Ride in Comfort with the #1 Driver Service in Pune for Your Loved Ones",
    image: punecity,
    alt: "Shaniwar Wada, Pune",
  },
};

const CitySpecificSection1 = () => {
  const { cityName } = useParams();
  const city = cityData[cityName] || cityData.mumbai; // fallback to Mumbai

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Text + Buttons */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {city.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              {city.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition shadow-md text-center"
              >
                Reserve Your Driver Today
              </Link>
              {/* <Link
                to="/download"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition shadow-md text-center"
              >
                Download App
              </Link> */}
            </div>
          </div>

          {/* Right: City Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={city.image}
              alt={city.alt}
              className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitySpecificSection1;