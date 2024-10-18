// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black shadow">
      <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row justify-center items-center">
        {/* Optional logo or name */}
        {/* <a href="#" className="text-xl font-bold text-white mb-2 md:mb-0">
          Your Name
        </a> */}
        <div className="flex space-x-12">
          <a href="#about" className="text-white hover:text-blue-600">
            About
          </a>
          <a href="#research" className="text-white hover:text-blue-600">
            Research
          </a>
          <a href="#open-source-projects" className="text-white hover:text-blue-600">
            Projects
          </a>
          <a href="#awards-and-honors" className="text-white hover:text-blue-600">
            Awards
          </a>
          <a href="#misc" className="text-white hover:text-blue-600">
            Other
          </a>
          <a href="#contact" className="text-white hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
