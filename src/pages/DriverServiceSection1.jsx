import React from "react";

const DriverServiceSection1 = () => {
  return (
    <section className="relative min-h-screen bg-white py-16 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-50 blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-50 rounded-full opacity-60 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Find The{" "}
            <span className="text-yellow-500">Perfect Driver</span>
            <br />
            For <span className="text-gray-900">Every Need</span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            From hourly to long-distance trips, our reliable, police-verified
            drivers ensure safe and professional service tailored to your
            requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white border-2 border-black text-black font-semibold rounded-full hover:bg-gray-100 transition shadow-md">
              Book a Driver Now
            </button>
            <button className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition shadow-md">
              Call Now
            </button>
          </div>
        </div>

        {/* Right - Phone Mockup */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-64 md:w-80">
            {/* Phone Frame */}
            <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-white rounded-[2.5rem] h-96 md:h-[500px] overflow-hidden relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>

                {/* Screen Content */}
                <div className="pt-10 px-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-yellow-500 font-bold text-lg">NOTIFYING</h3>
                    <p className="text-sm text-gray-600 mt-1">The Drivers</p>
                  </div>

                  {/* WhatsApp Message Bubble */}
                  <div className="bg-green-50 p-3 rounded-lg max-w-xs mx-auto shadow-sm">
                    <p className="text-xs text-gray-700 leading-tight">
                      Please check your WhatsApp for the booking confirmation details. (Note: It may take up to 2 minutes to confirm the booking, thank you for your patience!)
                    </p>
                  </div>

                  {/* Yellow Button */}
                  <button className="w-full bg-yellow-100 text-yellow-800 py-2 rounded-lg text-sm font-medium hover:bg-yellow-200 transition">
                    Click here to go to my bookings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverServiceSection1;