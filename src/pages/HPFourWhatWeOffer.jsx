import React from 'react';

// Import your provided images
import policeverifieddrivers from '../assets/policeverifieddrivers.jpg';
import happyclients from '../assets/happyclients.jpg';
import permanentdrivers from '../assets/permanentdrivers.jpg';
import bmwcar from '../assets/bmwcar.jpg';
import localimg from '../assets/localimg.jpg';
import outstationimg from '../assets/outstationimg.jpg';
import outstationdrop from '../assets/outstationdrop.jpg';
import permanent from '../assets/permanent.jpg';

const HPFourWhatWeOffer = () => {
  const services = [
    {
      title: 'Hourly Drivers',
      image: bmwcar,
      link: '/hourly-drivers',
      desc: 'Hourly drivers offer transportation services on an hourly basis. It is suitable for those who need to attend conferences and other events.',
    },
    {
      title: 'Outstation Drivers',
      image: outstationimg,
      link: '/outstation-drivers',
      desc: 'Outstation drivers accompany clients on journeys outside their hometowns, towns, or cities. They are skilled at handling various situations and providing a reliable travel experience.',
    },
    {
      title: 'Daily Drivers',
      image: localimg,
      link: '/daily-drivers',
      desc: 'Daily drivers are hired for a single day or specific occasions. They are useful when a dedicated driver is required for events, appointments, or special occasions.',
    },
    {
      title: 'Temporary Drivers',
      image: outstationdrop,
      link: '/temporary-drivers',
      desc: 'To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce.',
    },
    {
      title: 'Night Drivers',
      image: permanent,
      link: '/night-drivers',
      desc: 'To cover for unavailable regular drivers or during periods of high demand, they are hired for a short duration to offer flexibility and support when there is a shortage of workforce.',
    },
    {
      title: 'Permanent Drivers',
      image: permanentdrivers,
      link: '/permanent-drivers',
      desc: 'Permanent drivers work for individuals, families, or organisations on a long-term basis. They manage the client’s pick-up and drop-off preferences, schedules, and so on.',
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5E55A3] mb-3">
          What We Offer
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-10 leading-relaxed">
          We are committed to providing safe and reliable services. Our drivers are carefully vetted.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden border-2 border-dashed border-gray-300 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-yellow-400"
            >
              {/* Default View */}
              <a href={service.link} className="block">
                <div className="p-6 text-center">
                  <div className="mb-4 w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase tracking-wider">
                    {service.title}
                  </h3>
                </div>
              </a>

              {/* Hover Popup */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-5 z-10 border-2 border-yellow-400">
                <h3 className="text-sm md:text-base font-bold text-gray-800 uppercase tracking-wider border-b border-gray-400 pb-2 mb-3">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Dashed Border Effect */}
              <div className="card--border pointer-events-none absolute inset-0 border-2 border-dashed border-transparent group-hover:border-yellow-400 rounded-lg transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HPFourWhatWeOffer;