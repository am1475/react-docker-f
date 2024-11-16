import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'Software Engineer',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731656210/keene_u2upvf.jpg',
      testimonial: 'WellnessTracker has transformed the way I track my fitness goals. Highly recommended!'
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1728748253/cmu_fall2020_028_egowzo.jpg',
      testimonial: 'The personalized tracking and daily reminders have helped me stay consistent with my wellness journey.'
    },
    {
      name: 'Mark Johnson',
      position: 'Designer',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731656710/Mark-Johnson_futlz6.jpg',
      testimonial: 'A game changer for my health and fitness. The goal setting and progress tracking features are exceptional.'
    }
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      {/* Top Border */}
      

      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8">
          What Our Users Say
        </h2>

        {/* Testimonials Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
                />
              </div>
              <p className="text-gray-600 text-lg italic mb-6">"{testimonial.testimonial}"</p>
              <h3 className="text-xl font-semibold text-gray-700">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
     
    </section>
  );
};

export default Testimonials;
