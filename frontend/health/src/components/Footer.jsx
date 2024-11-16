import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';  // React Logo from react-icons

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6 sm:mb-8">
            Stay Connected with Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Join our community and stay updated with the latest news, offers, and more.
          </p>

          {/* React Logo */}
         

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-4xl hover:text-blue-700 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-4xl hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-4xl hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-4xl hover:text-blue-800 transition-colors" />
            </a>
          </div>

          {/* Footer Bottom Section */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-lg sm:text-xl text-gray-600">
              Developed by Amartya Paul | All rights reserved &copy; 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
