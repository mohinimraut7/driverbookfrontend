// import React from 'react';
// import driversjobImg from '../assets/driversjobImg.jpg'; // Adjust path if needed

// const DriversJob = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
    

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: Image with Hindi Text */}
//           <div className="relative">
//             <img
//               src={driversjobImg}
//               alt="Professional Driver"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-lg">
//               <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
//                 जहाँ सफर, वहाँ <br /> हम!
//               </h1>
//             </div>
//           </div>

//           {/* Right: Enquiry Form */}
//           <div className="bg-beige-100 p-8 rounded-xl shadow-md">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Enquiry Form</h2>
//             <form className="space-y-5">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <input
//                   type="text"
//                   placeholder="Driver Name *"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   required
//                 />
//                 <input
//                   type="text"
//                   placeholder="Driver Number *"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <input
//                   type="number"
//                   placeholder="Age"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//                 <input
//                   type="number"
//                   placeholder="Experience (in years)"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <select
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   required
//                 >
//                   <option value="">Employment Type *</option>
//                   <option>Permanent</option>
//                   <option>Temporary</option>
//                   <option>Part-Time</option>
//                 </select>

//                 <select
//                   className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
//                   required
//                 >
//                   <option value="">Reference *</option>
//                   <option>Friend</option>
//                   <option>Online</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md transition duration-200 shadow-md"
//               >
//                 SEND ENQUIRY
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DriversJob;


// =========================================================================================================================



import React, { useState, useEffect } from 'react';
import driversjobImg from '../assets/driversjobImg.jpg';

const DriversJob = () => {
  const [formData, setFormData] = useState({
    drivername: '',
    mobilenumber: '',
    age: '',
    experience: '',
    employmenttype: '',
    reference: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Check token on load
  useEffect(() => {
    const token = localStorage.getItem('token'); // Fixed: was 'authToken'
    if (!token) {
      setError('Please log in first to submit enquiry.');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    const token = localStorage.getItem('token'); // Fixed: was 'authToken'
    if (!token) {
      setError('No token found. Please log in again.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Enquiry submitted submitted successfully!');
        setFormData({
          drivername: '',
          mobilenumber: '',
          age: '',
          experience: '',
          employmenttype: '',
          reference: '',
        });
      } else {
        setError(data.message || 'Invalid or expired token.');
        if (response.status === 401) {
          localStorage.removeItem('token'); // Fixed: was 'authToken'
          setError('Session expired. Please log in again.');
        }
      }
    } catch (err) {
      setError('Network error. Check if backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={driversjobImg}
              alt="Professional Driver"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 rounded-b-lg">
              <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                जहाँ सफर, वहाँ <br /> हम!
              </h1>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-beige-100 p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Enquiry Form</h2>

            {message && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
                {message}
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="drivername"
                  placeholder="Driver Name *"
                  value={formData.drivername}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  type="text"
                  name="mobilenumber"
                  placeholder="Driver Number *"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <input
                  type="number"
                  name="experience"
                  placeholder="Experience (in years)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <select
                  name="employmenttype"
                  value={formData.employmenttype}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Employment Type *</option>
                  <option value="Permanent">Permanent</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Part-Time">Part-Time</option>
                </select>

                <select
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Reference *</option>
                  <option value="Friend">Friend</option>
                  <option value="Online">Online</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 rounded-md transition duration-200 shadow-md ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                    : 'bg-yellow-500 hover:bg-yellow-600 text-black'
                }`}
              >
                {loading ? 'Sending...' : 'SEND ENQUIRY'}
              </button>
            </form>

            {/* Optional: Show logged-in user */}
            {/* 
            <div className="mt-4 text-xs text-gray-500">
              Logged in: {JSON.parse(localStorage.getItem('user') || '{}').username}
            </div>
            */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DriversJob;
// =======================================

// import React, { useState, useEffect } from 'react';
// // import { useAuth } from '../hooks/useAuth';
// import { useNavigate } from 'react-router-dom';
// import driversjobImg from '../assets/driversjobImg.jpg';
// import { useAuth } from '../app/hooks/useAuth';


// const DriversJob = () => {
//   const { token, user, isLoggedIn } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     drivername: user?.username || '',
//     mobilenumber: user?.mobilenumber || '',
//     age: '',
//     experience: '',
//     employmenttype: '',
//     reference: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate('/login');
//     }
//   }, [isLoggedIn, navigate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');
//     setError('');

//     try {
//       const res = await fetch('http://localhost:5000/api/enquiry', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setMessage('Enquiry submitted successfully!');
//         setFormData({ ...formData, age: '', experience: '', employmenttype: '', reference: '' });
//       } else {
//         setError(data.message || 'Something went wrong');
//         if (res.status === 401) {
//           dispatch(logout());
//           navigate('/login');
//         }
//       }
//     } catch (err) {
//       setError('Network error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <main className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <img src={driversjobImg} alt="Driver" className="w-full rounded-lg shadow-lg" />
//             <div className="bg-gradient-to-t from-black/70 p-8 rounded-b-lg">
//               <h1 className="text-white text-5xl font-bold">जहाँ सफर, वहाँ हम!</h1>
//             </div>
//           </div>

//           <div className="bg-white p-8 rounded-xl shadow-md">
//             <h2 className="text-2xl font-bold mb-6">Enquiry Form</h2>

//             {message && <div className="p-3 bg-green-100 text-green-700 rounded mb-4">{message}</div>}
//             {error && <div className="p-3 bg-red-100 text-red-700 rounded mb-4">{error}</div>}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <input name="drivername" value={formData.drivername} onChange={handleChange} placeholder="Driver Name *" required className="w-full px-4 py-3 border rounded-md" />
//               <input name="mobilenumber" value={formData.mobilenumber} onChange={handleChange} placeholder="Mobile Number *" required className="w-full px-4 py-3 border rounded-md" />
//               <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="w-full px-4 py-3 border rounded-md" />
//               <input name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience (years)" className="w-full px-4 py-3 border rounded-md" />
              
//               <select name="employmenttype" value={formData.employmenttype} onChange={handleChange} required className="w-full px-4 py-3 border rounded-md">
//                 <option value="">Employment Type *</option>
//                 <option>Permanent</option>
//                 <option>Temporary</option>
//                 <option>Part-Time</option>
//               </select>

//               <select name="reference" value={formData.reference} onChange={handleChange} required className="w-full px-4 py-3 border rounded-md">
//                 <option value="">Reference *</option>
//                 <option>Friend</option>
//                 <option>Online</option>
//                 <option>Other</option>
//               </select>

//               <button type="submit" disabled={loading} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md">
//                 {loading ? 'Sending...' : 'SEND ENQUIRY'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default DriversJob;