// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section className="bg-gray-100" id="home" >
      <div className="container mx-auto px-6 py-10 flex items-center" >
        {/* Left: Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="./profile_photo_2.png" // Placeholder image URL
            alt="profile"
            className="w-48 h-48 object-cover rounded-full" // Adjust size as needed
          />
        </div>
        {/* Right: Contact Details */}
        <div className="w-1/2 pl-6">
          <h1 className="text-4xl font-bold text-gray-800">Faizan Faisal</h1>
          <p className="mt-2 text-gray-600">Research Field: Natural Language Processing (NLP)</p>
          <p className="mt-4 text-gray-600">
            Email: fzan (dot) fasl (at) gmail (dot) com
          </p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Connect with me:</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/FaizanFaisal25" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://linkedin.com/in/faizan-faisal25" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
