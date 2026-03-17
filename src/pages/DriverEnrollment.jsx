import React, { useState } from "react";
import driversjobImg from "../assets/driversjobImg.jpg";

const DriverEnrollment = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobilenumber: "",
    alternatenumber: "",
    email: "",
    dob: "",
    gender: "",
    address: "",
    district: "",

    licenseno: "",
    licenseissue: "",
    licenseexpiry: "",
    experience: "",
    employmenttype: "",

    reference: "",
    referencename: "",
  });

  const [files, setFiles] = useState({
    profilephoto: null,
    aadharfront: null,
    aadharback: null,
    licensefront: null,
    licenseback: null,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleFile = (e) => {
    const { name, files } = e.target;
    setFiles((p) => ({ ...p, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Driver Enrollment Submitted Successfully!");
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500";
  const fileClass =
    "w-full px-4 py-2 border border-gray-300 rounded-md bg-white";

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Image */}
          <div className="relative">
            <img
              src={driversjobImg}
              alt="Driver Enrollment"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-lg">
              <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                Enroll as a <br /> Professional Driver
              </h1>
            </div>
          </div>

          
          <div className="bg-white p-8 rounded-xl shadow-md max-h-screen overflow-y-auto">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Driver Enrollment Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Personal Details */}
              <h3 className="text-xl font-semibold text-gray-700">Personal Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name *"
                  value={formData.fullname}
                  onChange={handleInput}
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="mobilenumber"
                  placeholder="Mobile Number *"
                  value={formData.mobilenumber}
                  onChange={handleInput}
                  className={inputClass}
                  required
                />
                <input
                  type="text"
                  name="alternatenumber"
                  placeholder="Alternate Number"
                  value={formData.alternatenumber}
                  onChange={handleInput}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInput}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInput}
                  className={inputClass}
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInput}
                  className={inputClass}
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <textarea
                name="address"
                placeholder="Address *"
                value={formData.address}
                onChange={handleInput}
                className={`${inputClass} h-24`}
                required
              />

              <input
                type="text"
                name="district"
                placeholder="District / City *"
                value={formData.district}
                onChange={handleInput}
                className={inputClass}
                required
              />

              {/* Driving Details */}
              <h3 className="text-xl font-semibold text-gray-700">Driving Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="licenseno"
                  placeholder="License Number *"
                  value={formData.licenseno}
                  onChange={handleInput}
                  className={inputClass}
                  required
                />
                <input
                  type="date"
                  name="licenseissue"
                  value={formData.licenseissue}
                  onChange={handleInput}
                  className={inputClass}
                  required
                />
                <input
                  type="date"
                  name="licenseexpiry"
                  value={formData.licenseexpiry}
                  onChange={handleInput}
                  className={inputClass}
                  required
                />
                <input
                  type="number"
                  name="experience"
                  placeholder="Experience (Years)"
                  value={formData.experience}
                  onChange={handleInput}
                  className={inputClass}
                />
              </div>

              <select
                name="employmenttype"
                value={formData.employmenttype}
                onChange={handleInput}
                className={inputClass}
                required
              >
                <option value="">Employment Type *</option>
                <option value="Permanent">Permanent</option>
                <option value="Temporary">Temporary</option>
                <option value="Part-Time">Part-Time</option>
              </select>

              {/* File Uploads */}
              <h3 className="text-xl font-semibold text-gray-700">Required Documents</h3>

              <div className="space-y-4">
                <input type="file" name="profilephoto" onChange={handleFile} className={fileClass} required />
                <input type="file" name="aadharfront" onChange={handleFile} className={fileClass} required />
                <input type="file" name="aadharback" onChange={handleFile} className={fileClass} required />
                <input type="file" name="licensefront" onChange={handleFile} className={fileClass} required />
                <input type="file" name="licenseback" onChange={handleFile} className={fileClass} required />
              </div>

              {/* Reference Info */}
              <h3 className="text-xl font-semibold text-gray-700">Reference Information</h3>

              <select
                name="reference"
                value={formData.reference}
                onChange={handleInput}
                className={inputClass}
                required
              >
                <option value="">Reference Type *</option>
                <option value="Friend">Friend</option>
                <option value="Online">Online</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="text"
                name="referencename"
                placeholder="Reference Name"
                value={formData.referencename}
                onChange={handleInput}
                className={inputClass}
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md shadow-md"
              >
                Submit Enrollment
              </button>
            </form>

          </div>
        </div>
      </main>
    </div>
  );
};

export default DriverEnrollment;
