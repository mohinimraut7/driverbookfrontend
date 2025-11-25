import React, { useState } from 'react';

const Rates = () => {
  const [activeTab, setActiveTab] = useState('local'); // local, outstation, permanent
  const [city, setCity] = useState('Mumbai'); // Mumbai, Pune

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title & Description */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Rates</h1>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We ensure we keep our rates competitive and the best in industry with all standards of services.
            You can choose from wide range of plans and payment options. We are just a call away for you.
          </p>
          <p className="text-red-600 font-medium mt-3">
            Note: Cancellation charges applicable Rs. 200/-
          </p>
        </div>

        {/* City Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full shadow-md p-1">
            <button
              onClick={() => setCity('Mumbai')}
              className={`px-6 py-2 rounded-full flex items-center space-x-2 transition-all ${
                city === 'Mumbai'
                  ? 'bg-yellow-500 text-black font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Location</span>
              <span>Mumbai</span>
            </button>
            <button
              onClick={() => setCity('Pune')}
              className={`px-6 py-2 rounded-full flex items-center space-x-2 transition-all ${
                city === 'Pune'
                  ? 'bg-yellow-500 text-black font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>Location</span>
              <span>Pune</span>
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 mb-10">
          Showing rates for <span className="font-semibold">{city}</span>
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          <button
            onClick={() => setActiveTab('local')}
            className={`px-8 py-3 rounded-lg font-medium transition-all border-2 ${
              activeTab === 'local'
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-500'
            }`}
          >
            LOCAL
          </button>
          <button
            onClick={() => setActiveTab('outstation')}
            className={`px-8 py-3 rounded-lg font-medium transition-all border-2 ${
              activeTab === 'outstation'
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-500'
            }`}
          >
            OUTSTATION
          </button>
          <button
            onClick={() => setActiveTab('permanent')}
            className={`px-8 py-3 rounded-lg font-medium transition-all border-2 ${
              activeTab === 'permanent'
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'bg-white text-gray-700 border-gray-300 hover:border-yellow-500'
            }`}
          >
            PERMANENT
          </button>
        </div>

        {/* Content based on Active Tab */}
        {activeTab === 'local' && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Local Charges for 2 hours (Service will be available for 24 hrs)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Manual/Automatic Car */}
              <div>
                <p className="font-medium text-gray-700 mb-3">Manual / Automatic Car:-</p>
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Hours</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2 Hours</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 400/-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Per hour overtime</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 100/-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Night allowance applicable from 11 PM to 6 AM
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 200/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Luxury */}
              <div>
                <p className="font-medium text-gray-700 mb-3">Luxury:-</p>
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-yellow-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Hours</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2 Hours</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 500/-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Per hour overtime</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 100/-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Night allowance applicable from 11 PM to 6 AM
                      </td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 200/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'outstation' && (
          <div className="space-y-10">
            {/* Outstation - Same Day Return */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Outstation Charges (Same day return)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Manual/Automatic */}
                <div>
                  <p className="font-medium text-gray-700 mb-3">Manual / Automatic Car:-</p>
                  <table className="w-full border-collapse text-sm md:text-base">
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Hours</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Rates</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">12 Hours</td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 1200/-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Per hour overtime</td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 100/-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">For DA Daily allowance</td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 300/-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-xs">
                          Early morning charge (If you want a driver between 4 AM to 6 AM) (After 4.00 AM another’s day charge i.e. Rs. 1300/- applicable)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 200/-</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-600 mt-2">
                    Outstation Charges (Same Day Return) - Manual/Automatic Car
                  </p>
                </div>

                {/* Luxury */}
                <div>
                  <p className="font-medium text-gray-700 mb-3">Luxury:-</p>
                  <table className="w-full border-collapse text-sm md:text-base">
                    <thead>
                      <tr className="bg-yellow-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Hours</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Rates</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">12 Hours</td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 1300/-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Per hour overtime</td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 100/-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">For DA Daily allowance</td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 300/-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 text-xs">
                          Early morning charge (If you want a driver between 4 AM to 6 AM) (After 4.00 AM another’s day charge i.e. Rs. 1400/- applicable)
                        </td>
                        <td className="border border-gray-300 px-4 py-2">Rs. 200/-</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-600 mt-2">
                    Outstation Charges (Same Day Return) - Luxury Car
                  </p>
                </div>
              </div>
            </div>

            {/* Outstation - Stay */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Outstation Charges (Stay)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="font-medium text-gray-700 mb-3">Manual / Automatic Car:-</p>
                  <p className="text-sm text-gray-600">
                    Rates to be provided on request based on distance and duration.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-700 mb-3">Luxury:-</p>
                  <p className="text-sm text-gray-600">
                    Rates to be provided on request based on distance and duration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'permanent' && (
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-yellow-100">
                  <th className="border border-gray-300 px-6 py-3 text-left font-medium">Distance</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-medium">Rates</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-3">
                    6 months membership with unlimited replacement guarantee.
                  </td>
                  <td className="border border-gray-300 px-6 py-3">Rs. 6000/- + GST</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3">
                    1 year membership with unlimited replacement guarantee.
                  </td>
                  <td className="border border-gray-300 px-6 py-3">Rs. 8000/- + GST</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-4">Permanent Driver Rates by Distance</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rates;