import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your image
import happyclients from '../assets/happyclientrightsidecarousel.jpg';

const HPSectionSixOurHappyClient = () => {
  const testimonials = [
    {
      name: 'Renuka Nair',
      role: 'Verified Customer',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      quote: 'Most of the drivers we hire are good, courteous, drives well. Quite happy with the services.',
    },
    {
      name: 'Shilpa Kalsi',
      role: 'Verified Customer',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      quote: 'The drivers are reliable and well behaved. They are mostly with a good amount of experience. The charges are reasonable. Happy with the service.',
    },
    {
      name: 'Edwin P Naidu',
      role: 'Verified Customer',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      quote: 'Very good person comes on time very good nature neat and clean driving is very good if i want to give stars 10 on 10 i will give want like this driver.',
    },
    {
      name: 'Shilpa Taimni',
      role: 'Verified Customer',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      quote: 'I have been availing of Drivers on Hire services for the past 7 years. It was EXCELLENT. Rehanuma is the beacon that holds it all together. Fantastic Manager who gives best service, even today.',
    },
    {
      name: 'Manasi Joshi Roy',
      role: 'Verified Customer',
      avatar: 'https://randomuser.me/api/commons/32.jpg',
      rating: 5,
      quote: 'Have been using their services since a very long time. And we are extremely satisfied with their service & drivers.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Happy Clients
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Testimonial Card */}
          <div className="relative bg-white rounded-lg border border-gray-300 p-6 md:p-8 shadow-md">
            <div className="flex items-center mb-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{current.name}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  {current.role}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mb-3">
              {[...Array(current.rating)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 italic leading-relaxed">"{current.quote}"</p>

            {/* Navigation Arrows */}
            <div className="flex justify-between mt-6">
              <button
                onClick={goToPrev}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-1">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="hidden lg:block">
            <img
              src={happyclients}
              alt="Happy clients enjoying driver service"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Mobile: Show image below on small screens */}
        <div className="lg:hidden mt-8 flex justify-center">
          <img
            src={happyclients}
            alt="Happy clients enjoying driver service"
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HPSectionSixOurHappyClient;