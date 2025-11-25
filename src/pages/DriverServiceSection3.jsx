import React from "react";
import { Car, User, Clock, Calendar, Moon, MapPinned } from "lucide-react";

const DriverServiceSection3 = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8 text-yellow-600" />,
      title: "Temporary Drivers",
      desc: "Hire professional drivers for short-term needs with flexible scheduling. Ideal for occasional or last-minute travel plans.",
      link: "Book Now...",
      bg: "bg-white",
    },
    {
      icon: <User className="w-8 h-8 text-yellow-600" />,
      title: "Permanent Drivers",
      desc: "Reliable full-time drivers to handle your daily commutes and routines. Enjoy a consistent and dependable driving experience.",
      link: "Book Now...",
      bg: "bg-white",
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-600" />,
      title: "Hourly Drivers",
      desc: "Book experienced drivers for short trips or quick errands. Flexible by the hour to fit your busy schedule seamlessly.",
      link: "Book Now...",
      bg: "bg-yellow-50",
      highlighted: true,
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-600" />,
      title: "Daily Drivers",
      desc: "Hire a professional driver to manage all your travel needs for the entire day. Perfect for events, meetings, or busy days.",
      link: "Book Now...",
      bg: "bg-white",
    },
    {
      icon: <Moon className="w-8 h-8 text-yellow-600" />,
      title: "Night Drivers",
      desc: "Dependable drivers for safe and comfortable late-night travel. Ideal for night shifts, events, or long evening commutes.",
      link: "Book Now...",
      bg: "bg-white",
    },
    {
      icon: <MapPinned className="w-8 h-8 text-yellow-600" />,
      title: "Outstation Drivers",
      desc: "Experienced drivers for long-distance road trips or vacations. Travel stress-free with experts who know the best routes.",
      link: "Book Now...",
      bg: "bg-white",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our Range of Driver Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our driver services are designed to cater to all your travel needs. Whether it's a quick errand or a long-distance journey, we've got you covered with professional, reliable drivers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-sm border ${
                service.highlighted
                  ? "bg-yellow-50 border-yellow-200 shadow-yellow-100"
                  : "bg-white border-gray-100"
              } hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <a
                    href="#"
                    className="text-yellow-600 font-medium text-sm hover:text-yellow-700 transition flex items-center gap-1"
                  >
                    {service.link}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverServiceSection3;