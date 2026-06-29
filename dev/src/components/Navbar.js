import React, { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#open-source-projects', label: 'Projects' },
    { href: '#awards-and-honors', label: 'Awards' },
    { href: '#talks-presentations', label: 'Talks' },
    { href: '#misc', label: 'Other' },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="page-shell relative flex min-h-[72px] items-center justify-between gap-4">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 dark:text-slate-100"
        >
          Faizan Faisal
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition hover:border-brand-600 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
            <span className="hidden sm:inline">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </span>
          </button>

          <button
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-600 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-300 md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        <div
          className={`absolute left-4 right-4 top-full mt-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900 md:static md:left-auto md:right-auto md:top-auto md:mt-0 md:flex md:w-auto md:items-center md:gap-2 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
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