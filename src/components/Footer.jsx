import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

// Import your logo
import logo from '../assets/logosaavi.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo & Social */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="Driver on Hire Logo" className="h-16 mb-4" />
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Hourly Drivers</a></li>
            <li><a href="#" className="hover:text-white transition">Outstation Drivers</a></li>
            <li><a href="#" className="hover:text-white transition">Permanent Drivers</a></li>
            <li><a href="#" className="hover:text-white transition">Daily Drivers</a></li>
            <li><a href="#" className="hover:text-white transition">Temporary Drivers</a></li>
            <li><a href="#" className="hover:text-white transition">Night Drivers</a></li>
          </ul>
        </div>

        {/* Cities Available */}
        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Cities Available</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Drivers in Mumbai</a></li>
            <li><a href="#" className="hover:text-white transition">Drivers in Navi Mumbai</a></li>
            <li><a href="#" className="hover:text-white transition">Drivers in Thane</a></li>
            <li><a href="#" className="hover:text-white transition">Drivers in Pune</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start">
              <MapPin size={16} className="mr-2 mt-0.5 text-yellow-400" />
              <span>A/101,Vardhaman Vihar Vasai Palghar</span>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-2 text-yellow-400" />
              <a href="tel:022434359000" className="hover:text-white transition">9066181808</a>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2 text-yellow-400" />
              <a href="mailto:info@driveronhire.com" className="hover:text-white transition">saaviinfinet.helpdesk@gmail.com</a>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2 text-yellow-400" />
              <a href="mailto:support@driveronhire.com" className="hover:text-white transition">
saaviinfinet@gmail.com</a>
            </li>
          </ul>

          {/* App Store Buttons */}
          <div className="flex space-x-3 mt-6">
            <a href="#" className="bg-white text-black rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-200 transition text-xs font-medium">
              <span className="text-lg">Get it on</span>
              <span className="font-bold">Google Play</span>
            </a>
            <a href="#" className="bg-black text-white rounded-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition text-xs font-medium">
              <span className="text-lg">Download on the</span>
              <span className="font-bold">App Store</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p>© 2025 All Rights Reserved By <span className="text-yellow-400 font-medium">Saavi Infinet Pvt. Ltd.</span></p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;