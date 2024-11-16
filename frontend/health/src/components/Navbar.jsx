import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  // Toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg py-4 px-6 fixed w-full top-0 left-0 z-10">
      <div className="flex items-center justify-between">
        {/* Title on the left */}
        <div className="text-4xl font-bold text-gray-800">
          WellnessTracker
        </div>

        {/* Hamburger icon for small screens */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu} // Toggle the menu when clicked
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex space-x-8">
          <Link
            to="/"
            className="text-xl text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/signup"
            className="text-xl text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Signup
          </Link>
          <Link to="/login" className='text-xl text-gray-800 hover:text-blue-500 transition duration-300'>Login</Link>
          <Link
            to="/contact"
            className="text-xl text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="text-xl text-gray-800 hover:text-blue-500 transition duration-300"
          >
            Services
          </Link>
        </div>
      </div>

      {/* Mobile menu - displayed only when isOpen is true */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg py-4 px-6">
          <Link
            to="/home"
            className="block text-xl text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu} // Close the menu after selecting an item
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-xl text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu} // Close the menu after selecting an item
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-xl text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu} // Close the menu after selecting an item
          >
            Contact Us
          </Link>
          <Link
            to="/services"
            className="block text-xl text-gray-800 hover:text-blue-500 transition duration-300"
            onClick={toggleMenu} // Close the menu after selecting an item
          >
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
