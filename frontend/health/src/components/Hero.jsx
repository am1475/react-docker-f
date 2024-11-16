import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-100 py-16 lg:py-24">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6">
        
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Welcome to WellnessTracker
          </h1>
          <p className="text-lg lg:text-xl text-gray-600">
            Track your wellness journey with ease and precision.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Get Started
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731653959/mid-adult-man-is-listening-to-music-in-park_j7rmda.jpg"
            alt="Wellness Tracker"
            className="w-3/4 lg:w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
