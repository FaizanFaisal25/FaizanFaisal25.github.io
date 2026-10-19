// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl border-t border-slate-200 bg-white">
      <div className="page-shell py-3">
        <p className="meta-label">
          © {new Date().getFullYear()} Faizan Faisal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
