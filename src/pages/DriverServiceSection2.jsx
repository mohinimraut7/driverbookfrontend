import React from "react";
import { Shield, MapPin, Users, Clock } from "lucide-react";

const DriverServiceSection2 = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {/* 20000+ Police Verified Drivers */}
          <div className="space-y-3">
            <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <Shield className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">20000+</h3>
            <p className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Police Verified Drivers
            </p>
          </div>

          {/* 4 Major Cities Serving */}
          <div className="space-y-3">
            <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <MapPin className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">4</h3>
            <p className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Major Cities Serving
            </p>
          </div>

          {/* 5 Lac+ Happy Customers */}
          <div className="space-y-3">
            <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">5 LAC+</h3>
            <p className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Happy Customers
            </p>
          </div>

          {/* Response Time Under 45 Minutes */}
          <div className="space-y-3">
            <div className="mx-auto w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
              Response Time
            </h3>
            <p className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
              Under 45 Minutes
            </p>
          </div>
        </div>

        
     
      </div>
    </section>
  );
};

export default DriverServiceSection2;