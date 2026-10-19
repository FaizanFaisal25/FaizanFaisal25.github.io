import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#open-source-projects', label: 'Projects' },
    { href: '#awards-and-honors', label: 'Awards' },
    { href: '#talks-presentations', label: 'Talks' },
    { href: '#misc', label: 'Misc' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="page-shell relative flex min-h-14 items-center justify-between gap-4">
        <a href="#home" className="shrink-0 font-display text-2xl font-semibold text-slate-900">
          Faizan Faisal
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
        <div
          id="main-navigation"
          className={`absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-5 py-2 md:static md:border-0 md:p-0 ${isOpen ? 'block' : 'hidden md:block'}`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-2.5 text-sm text-slate-600 hover:text-brand-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
