import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../content';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800" role="navigation" aria-label="Hauptnavigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col focus:outline-none focus:ring-2 focus:ring-red-600 rounded">
              <span className="text-xl font-extrabold tracking-tighter text-white">
                ENGLER<span className="text-red-600">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold leading-none">
                Bodenbeschichtung
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {content.navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-red-600'
                      : 'text-neutral-300 hover:text-white'
                  } px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors focus:outline-none focus:text-red-600`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
            >
              <span className="sr-only">{isOpen ? 'Menü schließen' : 'Menü öffnen'}</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-neutral-900 border-b border-neutral-800 transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {content.navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-bold text-white hover:bg-neutral-800 border-l-4 border-transparent hover:border-red-600 focus:bg-neutral-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;