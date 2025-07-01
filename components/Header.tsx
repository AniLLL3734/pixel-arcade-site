
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black/30 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-press-start text-white hover:text-brand-accent transition-colors">
          Pixel<span className="text-brand-accent">Arcade</span>
        </Link>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search for games..."
            className="w-full bg-brand-light rounded-full px-4 py-2 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-brand-accent focus:outline-none transition"
          />
           <div className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
             </svg>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
