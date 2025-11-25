import React from "react";
import { useParams } from "react-router-dom";
import { Shield, Star, Handshake } from "lucide-react";

const CSTCardSection = () => {
  const { cityName } = useParams();
  const city = cityName
    ? cityName
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "Mumbai";

  const stats = [
    {
      number: "20000+",
      label: "Police Verified Drivers",
      icon: <Shield className="w-8 h-8 text-yellow-600" />,
    },
    {
      number: "5 LAC+",
      label: "Happy Clients",
      icon: <Star className="w-8 h-8 text-yellow-600" />,
    },
    {
      number: "1 LAC+",
      label: "Permanent Drivers",
      icon: <Handshake className="w-8 h-8 text-yellow-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* 3 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border-4 border-yellow-400 shadow-lg p-6 flex flex-col items-center text-center transform transition hover:scale-105"
            >
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {stat.number}
              </h3>
              <p className="text-sm md:text-base text-gray-700 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose DriverOnHire for Your Rides in {city}?
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Tired of long commutes and stressful traffic in {city}? Let us take the wheel while you sit back, relax, and enjoy your ride. Whether it’s for your daily office commute, a weekend getaway, or a late-night trip, DriverOnHire is here to make your travel seamless. Our fleet of police-verified, trained, and professional drivers ensures that you get where you need to go safely and on time, every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CSTCardSection;