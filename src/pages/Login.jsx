// import React from "react";
// import loginImg from "../assets/loginimg.svg"; // <-- your login image here
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10">
      
//       {/* Left Image Section */}
//       <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
//         <img src={loginImg} alt="login" className="w-[85%] md:w-[70%]" />
//       </div>

//       {/* Right Form Section */}
//       <div className="w-full md:w-1/2 flex justify-center">
//         <div className="w-full md:w-[75%] border rounded-2xl shadow-md p-8">
          
//           {/* Back Button */}
//           <button 
//             className="text-sm border px-3 py-1 rounded-md mb-4"
//             onClick={() => navigate(-1)}
//           >
//             ← Back
//           </button>

//           <h2 className="text-2xl font-semibold mb-6">Login</h2>

//           <form className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">
//                 Enter your phone number *
//               </label>
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
//               Send OTP
//             </button>
//           </form>

//           <p className="text-sm text-center mt-4">
//             Don’t have an account?{" "}
//             <span
//               onClick={() => navigate("/register")}
//               className="text-yellow-600 font-semibold cursor-pointer"
//             >
//               Register here
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// ========================================================



import React, { useState } from "react";
import loginImg from "../assets/loginimg.svg";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [mobilenumber, setMobilenumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Validate 10-digit number
    if (!/^\d{10}$/.test(mobilenumber)) {
      setError("Please enter a valid 10-digit phone number");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending login request to:", `${BASE_URL}/api/login`);

      const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobilenumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setSuccess("OTP sent to your phone!");
      
      // Save mobile number for OTP verification
      localStorage.setItem("loginMobile", mobilenumber);

      // Redirect to OTP verification page after 1.5 sec
      setTimeout(() => {
        navigate("/verify-otp");
      }, 1500);

    } catch (err) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-10">
      
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img src={loginImg} alt="login" className="w-[85%] md:w-[70%]" />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full md:w-[75%] border rounded-2xl shadow-md p-8">
          
          {/* Back Button */}
          <button 
            className="text-sm border px-3 py-1 rounded-md mb-4 flex items-center gap-1"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <h2 className="text-2xl font-semibold mb-6">Login</h2>

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
              <label className="block text-sm font-medium mb-2">
                Enter your phone number *
              </label>
              <div className="flex">
                <span className="px-4 py-3 border rounded-l-lg bg-gray-100 text-gray-700">+91</span>
                <input
                  type="number"
                  value={mobilenumber}
                  onChange={(e) => setMobilenumber(e.target.value)}
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
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-yellow-600 font-semibold cursor-pointer hover:underline"
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
