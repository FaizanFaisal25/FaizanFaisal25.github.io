import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="bg-black shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between md:justify-center items-center">
        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`flex flex-col md:flex-row items-center absolute md:relative w-full md:w-auto 
          ${isOpen ? 'top-16 left-0 right-0 bg-black z-50' : 'hidden md:flex'} 
          md:space-x-12 
          justify-center`}  
        >
          <a
            href="#about"
            className="text-white hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#research"
            className="text-white hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Research
          </a>
          <a
            href="#open-source-projects"
            className="text-white hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#awards-and-honors"
            className="text-white hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Awards
          </a>
          <a
            href="#talks-presentations"
            className="text-white hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Talks
          </a>
          <a
            href="#misc"
            className="text-white hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Other
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-600 py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;