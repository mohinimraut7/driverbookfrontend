// import React, { useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logosaavi.png";
// import { navItems } from "../constants";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [cityOpen, setCityOpen] = useState(false);
//   const [companyOpen, setCompanyOpen] = useState(false);

//   const cityRef = useRef(null);
//   const companyRef = useRef(null);

//   const toggleMenu = () => setMobileOpen((v) => !v);
//   const closeAll = () => {
//     setMobileOpen(false);
//     setCityOpen(false);
//     setCompanyOpen(false);
//   };

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (cityRef.current && !cityRef.current.contains(e.target)) {
//         setCityOpen(false);
//       }
//       if (companyRef.current && !companyRef.current.contains(e.target)) {
//         setCompanyOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const cityItem = navItems.find((i) => i.label === "CITY");
//   const companyItem = navItems.find((i) => i.label === "COMPANY");

//   return (
//     <nav className="w-full py-4 border-b border-gray-300 bg-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Driver on Hire" className="h-12 object-contain" />
//         </Link>

//         {/* ---------- DESKTOP MENU ---------- */}
//         <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
//           {navItems.map((item, idx) => (
//             <li
//               key={idx}
//               className="relative"
//               ref={item.label === "CITY" ? cityRef : item.label === "COMPANY" ? companyRef : null}
//             >
//               {item.dropdown ? (
//                 <div
//                   className="relative"
//                   onMouseEnter={() =>
//                     item.label === "CITY" ? setCityOpen(true) : setCompanyOpen(true)
//                   }
//                   onMouseLeave={() =>
//                     item.label === "CITY" ? setCityOpen(false) : setCompanyOpen(false)
//                   }
//                 >
//                   <button
//                     onClick={() =>
//                       item.label === "CITY"
//                         ? setCityOpen((v) => !v)
//                         : setCompanyOpen((v) => !v)
//                     }
//                     className="flex items-center gap-1 hover:text-yellow-600 transition"
//                   >
//                     {item.label}{" "}
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform ${
//                         (item.label === "CITY" && cityOpen) ||
//                         (item.label === "COMPANY" && companyOpen)
//                           ? "rotate-180"
//                           : ""
//                       }`}
//                     />
//                   </button>

//                   {/* Dropdown */}
//                   <ul
//                     className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden transition-all duration-200 ease-out ${
//                       (item.label === "CITY" && cityOpen) ||
//                       (item.label === "COMPANY" && companyOpen)
//                         ? "opacity-100 visible translate-y-0"
//                         : "opacity-0 invisible -translate-y-2"
//                     }`}
//                   >
//                     {item.dropdown.map((sub, sIdx) => (
//                       <li key={sIdx}>
//                         <Link
//                           to={sub.path}
//                           onClick={closeAll}
//                           className="block px-4 py-2.5 text-sm hover:bg-yellow-50 hover:text-yellow-700 transition"
//                         >
//                           {sub.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <Link to={item.path} className="hover:text-yellow-600 transition">
//                   {item.label}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link
//             to="/login"
//             className="px-4 py-2 border rounded-md font-medium hover:bg-gray-50 transition"
//           >
//             Sign In
//           </Link>
//           <Link
//             to="/register"
//             className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white hover:from-orange-600 hover:to-orange-900 transition"
//           >
//             Create Account
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <button className="md:hidden" onClick={toggleMenu}>
//           {mobileOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* ---------- MOBILE DRAWER ---------- */}
//       <div
//         className={`
//           md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out
//           ${mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
//         `}
//       >
//         <div className="p-5 space-y-5">
//           <ul className="flex flex-col gap-3 text-[16px] font-medium">
//             {navItems.map((item, idx) => (
//               <li
//                 key={idx}
//                 className={`
//                   transform transition-all duration-500
//                   ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
//                 `}
//                 style={{ transitionDelay: `${idx * 120}ms` }}
//               >
//                 {item.dropdown ? (
//                   <details className="group">
//                     <summary className="flex items-center justify-between cursor-pointer hover:text-yellow-600 list-none">
//                       {item.label}
//                       <ChevronDown className="group-open:rotate-180 transition-transform" size={18} />
//                     </summary>
//                     <ul className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-md p-2">
//                       {item.dropdown.map((sub, sIdx) => (
//                         <li key={sIdx}>
//                           <Link
//                             to={sub.path}
//                             onClick={closeAll}
//                             className="block py-1.5 px-2 rounded hover:bg-yellow-100 hover:text-yellow-700"
//                           >
//                             {sub.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </details>
//                 ) : (
//                   <Link
//                     to={item.path}
//                     onClick={closeAll}
//                     className="hover:text-yellow-600 transition"
//                   >
//                     {item.label}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Buttons */}
//           <div
//             className={`
//               pt-4 flex flex-col gap-3 transform transition-all duration-500
//               ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
//             `}
//             style={{ transitionDelay: `${navItems.length * 120}ms` }}
//           >
//             <Link
//               to="/login"
//               onClick={closeAll}
//               className="border py-2 rounded-md text-center font-medium"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/register"
//               onClick={closeAll}
//               className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 rounded-md text-center text-white"
//             >
//               Create Account
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// ==========================================================


import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logosaavi.png";
import { navItems } from "../constants";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const cityRef = useRef(null);
  const companyRef = useRef(null);
  const navigate = useNavigate();

  // Read user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token && !!user;

  const toggleMenu = () => setMobileOpen((v) => !v);
  const closeAll = () => {
    setMobileOpen(false);
    setCityOpen(false);
    setCompanyOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setCityOpen(false);
      }
      if (companyRef.current && !companyRef.current.contains(e.target)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cityItem = navItems.find((i) => i.label === "CITY");
  const companyItem = navItems.find((i) => i.label === "COMPANY");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    closeAll();
    navigate("/login");
  };

  return (
    <nav className="w-full py-4 border-b border-gray-300 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Saavi Infinet" className="h-12 object-contain" />
        </Link>

        {/* ---------- DESKTOP MENU ---------- */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="itorial"
              ref={item.label === "CITY" ? cityRef : item.label === "COMPANY" ? companyRef : null}
            >
              {item.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() =>
                    item.label === "CITY" ? setCityOpen(true) : setCompanyOpen(true)
                  }
                  onMouseLeave={() =>
                    item.label === "CITY" ? setCityOpen(false) : setCompanyOpen(false)
                  }
                >
                  <button
                    onClick={() =>
                      item.label === "CITY"
                        ? setCityOpen((v) => !v)
                        : setCompanyOpen((v) => !v)
                    }
                    className="flex items-center gap-1 hover:text-yellow-600 transition"
                  >
                    {item.label}{" "}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        (item.label === "CITY" && cityOpen) ||
                        (item.label === "COMPANY" && companyOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <ul
                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 overflow-hidden transition-all duration-200 ease-out ${
                      (item.label === "CITY" && cityOpen) ||
                      (item.label === "COMPANY" && companyOpen)
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {item.dropdown.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <Link
                          to={sub.path}
                          onClick={closeAll}
                          className="block px-4 py-2.5 text-sm hover:bg-yellow-50 hover:text-yellow-700 transition"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link to={item.path} className="hover:text-yellow-600 transition">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* ========== DESKTOP AUTH BUTTONS ========== */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-3">
                <span className="font-medium text-gray-700">
                  Hi, <span className="text-yellow-600">{user?.username || "User"}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border rounded-md font-medium hover:bg-gray-50 transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white hover:from-orange-600 hover:to-orange-900 transition"
              >
                Create Account
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------- MOBILE DRAWER ---------- */}
      <div
        className={`
          md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="p-5 space-y-5">
          <ul className="flex flex-col gap-3 text-[16px] font-medium">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={`
                  transform transition-all duration-500
                  ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
                `}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                {item.dropdown ? (
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer hover:text-yellow-600 list-none">
                      {item.label}
                      <ChevronDown className="group-open:rotate-180 transition-transform" size={18} />
                    </summary>
                    <ul className="ml-4 mt-2 space-y-1 bg-gray-50 rounded-md p-2">
                      {item.dropdown.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link
                            to={sub.path}
                            onClick={closeAll}
                            className="block py-1.5 px-2 rounded hover:bg-yellow-100 hover:text-yellow-700"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className="hover:text-yellow-600 transition"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ========== MOBILE AUTH BUTTONS ========== */}
          <div
            className={`
              pt-4 flex flex-col gap-3 transform transition-all duration-500
              ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
            `}
            style={{ transitionDelay: `${navItems.length * 120}ms` }}
          >
            {isLoggedIn ? (
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <span className="font-medium">
                  Hi, <span className="text-yellow-600">{user?.username}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeAll}
                  className="border py-2 rounded-md text-center font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={closeAll}
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 rounded-md text-center text-white"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
