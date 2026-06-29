// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="page-shell py-6 text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Faizan Faisal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
