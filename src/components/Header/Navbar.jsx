import React, { useState } from 'react';
import Menu from './Menu'
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  return (
    <nav className="bg-gray-400">
      <div className="flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider">
          LOGO
        </div>
        <button
          type="button"
          className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-between px-4 py-2 bg-gray-400">
        <div className="flex ">
          <Link to="/" className="px-3 py-2 text-gray-800 hover:text-white hover:bg-gray-700">Home</Link>
          <Link to="about" className="px-3 py-2 text-gray-800 hover:text-white hover:bg-gray-700">About</Link>
          <Link to="contact" className="px-3 py-2 text-gray-800 hover:text-white hover:bg-gray-700">Contact</Link>
        </div>
        <div className="flex ">
          <Link to="login" className="px-3 py-2 text-gray-800 hover:text-white hover:bg-gray-700">Login</Link>
          <Link  to="register" className="px-3 py-2 text-gray-800 hover:text-white hover:bg-gray-700">Register</Link>
        </div>
      </div>
      {showMobileMenu && <Menu />}
    </nav>
  );
}

export default Navbar;
