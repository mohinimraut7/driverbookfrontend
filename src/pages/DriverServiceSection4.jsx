import React from "react";
import { Check } from "lucide-react";
// gatewayofindia
import gatewayofindia from '../assets/gatewayofindia.jpg';
import mumbaiskyline from '../assets/mumbaiskyline.jpg';
import thaneupavantalav from '../assets/thaneupavantalav.jpg';


const DriverServiceSection4 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Images + Badges */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative">
            <img
              src={gatewayofindia}
              alt="Gateway of India, Mumbai"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Small Images Row */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src={mumbaiskyline}
              alt="Mumbai Skyline"
              className="h-32 object-cover rounded-2xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2070"
              alt="Pune City"
              className="h-32 object-cover rounded-2xl shadow-md"
            />
            <img
              src={thaneupavantalav}
              alt="Thane Lake"
              className="h-32 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              <Check className="w-5 h-5" />
              24/7 Reliable Service
            </div>
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              <Check className="w-5 h-5" />
              Police Verified Drivers
            </div>
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              <Check className="w-5 h-5" />
              Serving 4 Major Cities
            </div>
          </div>
        </div>

        {/* Right - Text + CTA */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experience Excellence in Driver Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Saavi Infinet Pvt Ltd combines professionalism and convenience to meet all your travel needs. From short city commutes to long-distance trips, we deliver 24/7 reliable service across <strong>Mumbai, Pune, Thane, and Navi Mumbai</strong>. Our police-verified, experienced drivers ensure your safety and satisfaction every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/919876543210"
              className="px-8 py-3 bg-white border-2 border-black text-black font-semibold rounded-full hover:bg-gray-50 transition shadow-md text-center"
            >
              Book a Driver Now
            </a>
            <a
              href="tel:+919876543210"
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition shadow-md text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverServiceSection4;