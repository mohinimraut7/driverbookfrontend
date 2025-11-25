// src/components/CSSection4.jsx
import React from "react";
import { useParams } from "react-router-dom";

// City data (shared with other sections)
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

const CSSection4 = () => {
  const { cityName } = useParams();
  const city = cityInfo[cityName] || cityInfo.mumbai; // fallback to Mumbai

  const benefits = [
    {
      title: "Stress-Free Commute",
      description:
        "Leave the traffic behind and let our professional drivers handle it. You can focus on work, relax, or enjoy your time without worrying about the road. It’s the ultimate way to reclaim your time during daily commutes.",
    },
    {
      title: "Expert Navigation",
      description: `Our drivers are experts at navigating ${city.name}'s roads. They know the best routes, shortcuts, and ways to avoid traffic jams, ensuring that you reach your destination faster and more efficiently, every time.`,
    },
    {
      title: "Punctual & Reliable Service",
      description:
        "You can always count on us. Whether you need a driver for an important meeting, a special event, or a weekend getaway, we guarantee that you’ll never be late. Our drivers arrive on time, every time, to get you to your destination without delay.",
    },
    {
      title: "Flexibility & Convenience",
      description:
        "Our services are tailored to your needs. Whether it’s for a few hours, a full day, or a long-term hire, we provide flexible options. You can book a driver whenever you need one, making your travel experience more convenient and stress-free.",
    },
    {
      title: "Safety First",
      description:
        "Your safety is our priority. All our drivers are police-verified and professionally trained, ensuring that you travel securely. Whether it’s a night ride or a long-distance trip, we make sure you’re in safe hands from start to finish.",
    },
    {
      title: "Cost-Effective Travel",
      description:
        "Forget about the costs of owning and maintaining a vehicle. Hiring a driver is a cost-effective alternative. With affordable rates and no hidden fees, we make it easy for you to travel without breaking the bank.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Benefits of Hiring Drivers in {city.name}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Hiring a driver with DriverOnHire brings several advantages to make your travel seamless and stress-free.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border-4 border-yellow-300 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 bg-yellow-300 px-4 py-2 rounded-t-lg -mt-6 -mx-6">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CSSection4;