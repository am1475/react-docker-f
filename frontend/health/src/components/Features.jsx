import React from 'react';

const Features = () => {
  const features = [
    { 
      title: 'Personalized Tracking', 
      description: 'Track your wellness goals with personalized metrics.',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731655113/ckrtbfb7g09hbgmfz5lc8e5i1-event-tracking-fm_dear8b.svg' // Replace with an image URL from Unstop or other sources
    },
    { 
      title: 'Daily Reminders', 
      description: 'Stay on top of your goals with daily reminders and tips.',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731655199/reminder-infographics-icon-flat-cartoon-illustration-2CT6W03_ekvvqp.jpg' // Replace with an image URL from Unstop or other sources
    },
    { 
      title: 'Goal Setting', 
      description: 'Set achievable wellness goals tailored to your needs.',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731655290/ambition-abstract-concept-illustration-business-ambition-determination-setting-big-goal-making-fast-career-self-confident-getting-what-you-want-desire-success_335657-33_fmv6ow.jpg' // Replace with an image URL from Unstop or other sources
    },
    { 
      title: 'Progress Visualization', 
      description: 'See your progress with detailed charts and analytics.',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731655468/dashboard-ui-ux-kit-great-design-for-any-site-purposes-business-infographic-template-vector_cm7myj.jpg' // Replace with an image URL from Unstop or other sources
    },
    { 
      title: 'Community Support', 
      description: 'Join a community of wellness enthusiasts and share tips.',
      image: 'https://res.cloudinary.com/dqm8rxpzq/image/upload/v1731655530/stylized-volunteer-team-giving-care-sharing-hope-isolated-flat-illustration-cartoon-group-characters-helping-poor-people-with-social-support-money_74855-14169_cc71lf.jpg' // Replace with an image URL from Unstop or other sources
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 py-16 lg:py-24">
      
      {/* Top Curved Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#f3f4f6"
        >
          <path d="M0,50 C400,100 800,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Features Content */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
          Key Features
        </h2>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-b-lg p-6 text-center hover:shadow-xl transition-shadow duration-200 ease-in-out"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
