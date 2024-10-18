// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow mt-8">
      <div className="container mx-auto px-6 py-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Faizan Faisal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
