// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="container mx-auto px-6 py-10 relative overflow-hidden">
        {/* Background image */}
        <img
          src="/davis_campus.png"
          alt="UC Davis Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center">
          {/* Left: Profile with circular backdrop */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <div className="relative w-56 h-56 flex items-center justify-center">
              {/* Thicker circular border */}
              <div className="absolute w-full h-full rounded-full bg-white bg-opacity-60" />
              <img
                src="./profile_photo.jpg"
                alt="profile"
                className="w-48 h-48 object-cover rounded-full relative z-10"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="w-full md:w-1/2 px-4 text-white text-center md:text-left break-words">
            <h1 className="text-4xl font-bold">Faizan Faisal</h1>
            <p className="mt-2">Research Area: NLP / AI / HCI</p>
            <p className="mt-4">Email: fznfaisal@ucdavis.edu</p>
            <div className="mt-4">
              <div className="flex justify-center md:justify-start space-x-4 mt-2">
                <a
                  href="https://github.com/FaizanFaisal25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                  href="https://linkedin.com/in/faizan-faisal25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
