import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import DriverService from "./pages/DriverService";
import Company from "./pages/Company";
import City from "./pages/City";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CitySpecific from "./pages/CitySpecific";
import CompanySpecific from "./pages/CompanySpecific";
import CompanyContactUs from "./pages/CompanyContactUs";   // Import this!
import DriversJob from "./pages/DriversJob";
import Rates from "./pages/Rates";
import VerifyOtp from "./pages/VerifyOtp";   // <-- Add this line

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driverservice" element={<DriverService />} />
          <Route path="/company" element={<Company />} />
          <Route path="/city" element={<City />} />
          <Route path="/city/:cityName" element={<CitySpecific />} />

          {/* Specific COMPANY pages - MUST come BEFORE /company/:name */}
          <Route path="/company/contactus" element={<CompanyContactUs />} />
          <Route path="/company/driversjob" element={<DriversJob />} />
          <Route path="/company/rates" element={<Rates />} />

          {/* Dynamic route - catches /company/rates, /company/blog, etc */}
          <Route path="/company/:name" element={<CompanySpecific />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

           {/* ADD THIS ROUTE */}
          <Route path="/verify-otp" element={<VerifyOtp />} />   {/* <-- New Route */}
        
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;

// =================================

// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages
// import Home from "./pages/Home";
// import DriverService from "./pages/DriverService";
// import Company from "./pages/Company";
// import City from "./pages/City";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import CitySpecific from "./pages/CitySpecific";
// import CompanySpecific from "./pages/CompanySpecific";
// import CompanyContactUs from "./pages/CompanyContactUs";
// import DriversJob from "./pages/DriversJob";
// import Rates from "./pages/Rates";
// import VerifyOtp from "./pages/VerifyOtp"; // Correct import

// const App = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/driverservice" element={<DriverService />} />
//           <Route path="/company" element={<Company />} />
//           <Route path="/city" element={<City />} />
//           <Route path="/city/:cityName" element={<CitySpecific />} />

//           <Route path="/company/contactus" element={<CompanyContactUs />} />
//           <Route path="/company/driversjob" element={<DriversJob />} />
//           <Route path="/company/rates" element={<Rates />} />

//           <Route path="/company/:name" element={<CompanySpecific />} />

//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/verify-otp" element={<VerifyOtp />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;