import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send to API or show alert
    alert('Form submitted!');
  };

  return (
    <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 py-16 lg:py-24">
      
      {/* Top Wavy Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -mt-16">
        <svg
          className="relative block w-full h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          fill="#f3f4f6"
        >
          <path d="M0,63 C400,200 800,0 1200,100 C1600,200 1200,300 1200,0 L1200,0 Z"></path>


        </svg>
      </div>

      {/* Contact Form Content */}
      <div className="container mx-auto px-6 pt-32">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-4 mt-2"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-4 mt-2"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-4 mt-2"
                placeholder="Write your message"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
