import React, { useState, useEffect, useRef } from 'react';

const HPSectionSevenFeaturedIn = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Duplicate items for seamless infinite scroll
  const media = [
    {
      logo: 'APN NEWS',
      color: 'text-red-700',
      title: 'National News Network',
    },
    {
      logo: 'REPUBLIC',
      color: 'text-red-600',
      title: 'Digital News Platform',
    },
    {
      logo: 'LOKMAT TIMES',
      color: 'text-gray-700',
      title: 'Regional Language Newspaper',
    },
    {
      logo: 'mid-day',
      color: 'text-blue-700',
      title: 'Leading Mumbai Daily',
    },
  ];

  const duplicatedMedia = [...media, ...media]; // For infinite loop

  useEffect(() => {
    if (!scrollRef.current || isPaused) return;

    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        // Reset to beginning when halfway through duplicated items
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Featured In
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-10">
          Our expertise and insights have been recognized by leading media platforms
        </p>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'auto' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex animate-scroll" style={{ width: 'max-content' }}>
            {duplicatedMedia.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 md:w-56 mx-4 md:mx-6 bg-white rounded-lg shadow-sm p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <h3 className={`text-lg md:text-xl font-bold ${item.color} mb-1`}>
                  {item.logo}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional: Custom Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HPSectionSevenFeaturedIn;