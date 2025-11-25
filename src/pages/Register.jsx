// import React from "react";
// import registerImg from "../assets/registerimg.svg"; // <-- change image as per your file path

// const Register = () => {
//   return (
//     <div className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10">
      
//       {/* Left Illustration Section */}
//       <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
//         <img src={registerImg} alt="register" className="w-[85%] md:w-[70%]" />
//       </div>

//       {/* Right Form Section */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="w-full md:w-[75%] border rounded-2xl shadow-md p-8">
//           <h2 className="text-2xl font-semibold mb-6 text-center">REGISTER</h2>

//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Enter your Name *</label>
//               <input
//                 type="text"
//                 placeholder="Enter your Name"
//                 className="w-full border rounded-lg px-4 py-3 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Enter your phone number *</label>
//               <div className="flex">
//                 <span className="px-4 py-3 border rounded-l-lg bg-gray-100">+91</span>
//                 <input
//                   type="number"
//                   placeholder="Enter phone number"
//                   className="w-full border border-l-0 rounded-r-lg px-4 py-3 outline-none"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
//             >
//               REGISTER
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// =========================================================================

// import React, { useState } from "react";
// import registerImg from "../assets/registerimg.svg"; // <-- change image as per your file path

// const BASE_URL = import.meta.env.VITE_BASE_URL || "https://driverbook.saavi.co.in";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     mobilenumber: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     // Basic validation
//     if (!formData.username.trim()) {
//       setError("Name is required");
//       setLoading(false);
//       return;
//     }
//     if (!/^\d{10}$/.test(formData.mobilenumber)) {
//       setError("Please enter a valid 10-digit phone number");
//       setLoading(false);
//       return;
//     }

//     try {
      
//       const response = await fetch(`http://localhost:5000/api/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: formData.username,
//           mobilenumber: formData.mobilenumber,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Registration failed");
//       }

//       setSuccess("Registration successful!");
//       setFormData({ username: "", mobilenumber: "" });
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10">
//       {/* Left Illustration Section */}
//       <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
//         <img src={registerImg} alt="register" className="w-[85%] md:w-[70%]" />
//       </div>

//       {/* Right Form Section */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="w-full md:w-[75%] border rounded-2xl shadow-md p-8">
//           <h2 className="text-2xl font-semibold mb-6 text-center">REGISTER</h2>

//           {/* Success Message */}
//           {success && (
//             <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center">
//               {success}
//             </div>
//           )}

//           {/* Error Message */}
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">
//               {error}
//             </div>
//           )}

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium mb-2">Enter your Name *</label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 placeholder="Enter your Name"
//                 className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
//                 disabled={loading}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Enter your phone number *</label>
//               <div className="flex">
//                 <span className="px-4 py-3 border rounded-l-lg bg-gray-100 text-gray-700">+91</span>
//                 <input
//                   type="number"
//                   name="mobilenumber"
//                   value={formData.mobilenumber}
//                   onChange={handleChange}
//                   placeholder="Enter phone number"
//                   className="w-full border border-l-0 rounded-r-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                   disabled={loading}
//                   maxLength="10"
//                 />
//               </div>
//               <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-lg font-semibold transition ${
//                 loading
//                   ? "bg-gray-400 text-gray-700 cursor-not-allowed"
//                   : "bg-black text-white hover:bg-gray-800"
//               }`}
//             >
//               {loading ? "Registering..." : "REGISTER"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

// ===============================================================
import React, { useState } from "react";
import registerImg from "../assets/registerimg.svg"; // <-- change image as per your file path


const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    mobilenumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



const BASE_URL = import.meta.env.VITE_BASE_URL||"http://bookmydriver.saavi.co.in";

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log("BASE_URL:", BASE_URL); // Add this line

    setError("");
    setSuccess("");
    setLoading(true);

    // Basic validation
    if (!formData.username.trim()) {
      setError("Name is required");
      setLoading(false);
      return;
    }
    if (!/^\d{10}$/.test(formData.mobilenumber)) {
      setError("Please enter a valid 10-digit phone number");
      setLoading(false);
      return;
    }
    try {
      // Only change: Using dynamic BASE_URL
      const response = await fetch(`${BASE_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          mobilenumber: formData.mobilenumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Registration successful!");
      setFormData({ username: "", mobilenumber: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10">
      {/* Left Illustration Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img src={registerImg} alt="register" className="w-[85%] md:w-[70%]" />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full md:w-[75%] border rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">REGISTER</h2>

          {/* Success Message */}
          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center">
              {success}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">Enter your Name *</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Enter your phone number *</label>
              <div className="flex">
                <span className="px-4 py-3 border rounded-l-lg bg-gray-100 text-gray-700">+91</span>
                <input
                  type="number"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border border-l-0 rounded-r-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  disabled={loading}
                  maxLength="10"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                loading
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {loading ? "Registering..." : "REGISTER"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;