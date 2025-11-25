import React, { useState } from 'react';

const HPSectionFiveRentADriver = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText = `Are you tired of dealing with the hassles of commuting? Let us simplify your life with our convenient and reliable driver on call service. Whether you need a driver for a single trip or regular commuting, Driver On Hire is here to meet all your transportation needs. At Driver on Hire, book a driver online with quick and easy steps. So that it is a hassle-free experience for our customers. Simply provide your desired pickup and drop-off locations. Our user-friendly interface enables you to match you with a suitable driver who meets your specific requirements. Want to know what’s more? Then check out what makes Driver On Hire the most trusted driver service. Discover the qualities that set our hired driver services apart as the most trusted in the industry.`;

  const fullText = `Are you tired of dealing with the hassles of commuting? Let us simplify your life with our convenient and reliable driver on call service. Whether you need a driver for a single trip or regular commuting, Driver On Hire is here to meet all your transportation needs. At Driver on Hire, book a driver online with quick and easy steps. So that it is a hassle-free experience for our customers. Simply provide your desired pickup and drop-off locations. Our user-friendly interface enables you to match you with a suitable driver who meets your specific requirements. Want to know what’s more? Then check out what makes Driver On Hire the most trusted driver service. Discover the qualities that set our hired driver services apart as the most trusted in the industry.

1. **Quick Recruitment And Verified Drivers**: Rest assured with our verified, licensed, and well-trained drivers who have undergone rigorous background checks, ensuring your safety and peace of mind. Get drivers for your service swiftly and effortlessly with our efficient recruitment process, ensuring timely availability for your needs.

2. **Driver within 60 Mins**: Need a driver urgently? We guarantee prompt assistance with a driver arriving at your location within 60 minutes. Experience a hassle-free and straightforward process for driver selection, making it easy and convenient to find the perfect fit for your requirements.

3. **Special Drivers**: For your high-end and luxury vehicles, we have a dedicated team of professional driver service who have experience in handling prestigious automobiles. Tailoring our service to your unique needs, we match you with a suitable driver who meets your specific requirements and preferences, ensuring a personalized experience.

4. **Contract Basis**: We offer flexible contract options, providing long-term driver services to cater to your situational requirement, guaranteeing reliable and consistent support whenever you require.

So, don’t let commuting be a source of stress anymore. Book a driver on call and enjoy a comfortable and hassle-free journey. Contact us today to experience our exceptional Driver on Hire service and discover the convenience of having a professional driver at your fingertips.`;

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5E55A3] mb-6">
          Rent a Driver on Call for Effortless Travel Experience
        </h2>

        {/* Description */}
        <div className="text-left max-w-5xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
          <p className="text-center md:text-left">
            {isExpanded ? fullText : shortText}
          </p>

          {/* Numbered List (only shown when expanded) */}
          {isExpanded && (
            <div className="mt-6 space-y-4 text-left">
              {/* List items are part of fullText above */}
            </div>
          )}
        </div>

        {/* Read More / Less Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-[#5E55A3] font-semibold hover:underline block mx-auto"
        >
          {isExpanded ? '...Read Less' : 'Read More...'}
        </button>
      </div>
    </section>
  );
};

export default HPSectionFiveRentADriver;