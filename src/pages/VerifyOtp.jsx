// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

// const VerifyOTP = () => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const mobilenumber = localStorage.getItem("loginMobile");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     if (!/^\d{6}$/.test(otp)) {
//       setError("Enter 6-digit OTP");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(`${BASE_URL}/api/verify-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ mobilenumber, otp }),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Invalid OTP");

//       setSuccess("Login successful!");
//       localStorage.removeItem("loginMobile");

//       // Save token if returned
//       if (data.token) localStorage.setItem("token", data.token);

//       setTimeout(() => navigate("/"), 1500);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center px-6">
//       <div className="w-full max-w-md border rounded-2xl shadow-md p-8">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Verify OTP</h2>
//         <p className="text-sm text-gray-600 mb-4 text-center">
//           OTP sent to +91 {mobilenumber}
//         </p>

//         {success && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center">{success}</div>}
//         {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">{error}</div>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="number"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter 6-digit OTP"
//             className="w-full border rounded-lg px-4 py-3 text-center text-xl tracking-widest outline-none focus:ring-2 focus:ring-black"
//             maxLength="6"
//             disabled={loading}
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-3 rounded-lg font-semibold ${loading ? "bg-gray-400" : "bg-black text-white"}`}
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4">
//           <span onClick={() => navigate("/login")} className="text-blue-600 cursor-pointer">
//             Resend OTP
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default VerifyOTP;


// ====================================================================================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const mobilenumber = localStorage.getItem("loginMobile");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!/^\d{6}$/.test(otp)) {
      setError("Enter a valid 6-digit OTP");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobilenumber, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid OTP");
      }

      // Save token & user
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      localStorage.removeItem("loginMobile");

      setSuccess("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="w-full max-w-md border rounded-2xl shadow-lg p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Verify OTP</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          OTP sent to <strong>+91 {mobilenumber}</strong>
        </p>

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center font-medium">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            inputMode="numeric"
            value={otp}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only digits, max 6
              const numericValue = value.replace(/\D/g, "").slice(0, 6);
              setOtp(numericValue);
            }}
            placeholder="Enter 6-digit OTP"
            className="w-full border rounded-lg px-4 py-3 text-center text-xl tracking-widest outline-none focus:ring-2 focus:ring-yellow-500 transition"
            maxLength={6}
            disabled={loading}
            autoComplete="one-time-code"
            autoFocus
          />

          <button
            type="submit"
            disabled={loading || otp.length !== 6}
            className={`w-full py-3 rounded-lg font-bold text-lg transition-all ${
              loading || otp.length !== 6
                ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600 text-black shadow-md"
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <p className="text-center text-sm mt-5 text-gray-600">
          Didn't receive OTP?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-yellow-600 font-medium cursor-pointer hover:underline"
          >
            Resend OTP
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;

// ==========================================

// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from '../app/features/auth/authSlice';
// // import { loginSuccess } from '../features/auth/authSlice';


// const VerifyOtp = () => {
//   const [otp, setOtp] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const mobile = location.state?.mobile;

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('http://localhost:5000/api/auth/verify-otp', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ mobile, otp }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       dispatch(loginSuccess({ token: data.token, user: data.user }));
//       navigate('/');
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
//       <button type="submit">Verify</button>
//     </form>
//   );
// };


// ===============================================

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from '../features/auth/authSlice';

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const mobile = location.state?.mobile;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ mobile, otp }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         dispatch(loginSuccess({ token: data.token, user: data.user }));
//         navigate('/');
//       } else {
//         alert(data.message || 'Invalid OTP');
//       }
//     } catch (err) {
//       alert('Network error');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter 6-digit OTP"
//             maxLength="6"
//             className="w-full px-4 py-3 border rounded-md text-center text-xl"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // EXPORT DEFAULT
// export default VerifyOtp;

// ================================================

// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginSuccess } from '../features/auth/authSlice'; // Correct path

// const VerifyOtp = () => {
//   const [otp, setOtp] = useState('');
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const mobile = location.state?.mobile;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/verify-otp', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ mobile, otp }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         dispatch(loginSuccess({ token: data.token, user: data.user }));
//         navigate('/');
//       } else {
//         alert(data.message || 'Invalid OTP');
//       }
//     } catch (err) {
//       alert('Network error');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter 6-digit OTP"
//             maxLength="6"
//             className="w-full px-4 py-3 border rounded-md text-center text-xl tracking-widest"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md transition"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // DEFAULT EXPORT
// export default VerifyOtp;