import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme from context

  return (
    <nav
      className={`p-6 fixed top-0 left-0 w-full z-10 ${
        theme === 'light' ? 'bg-white text-gray-900 shadow-lg' : 'bg-gray-900 text-white shadow-2xl'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold transition-all duration-300 transform hover:scale-105">
          Movie App
        </h1>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            to="/watchlist"
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300 transform hover:scale-105"
          >
            Watchlist
          </Link>

          <button
            onClick={toggleTheme}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300 transform hover:scale-105"
          >
            {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
