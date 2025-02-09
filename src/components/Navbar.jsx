import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); // Get theme and toggleTheme from context
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav
      className={`p-4 fixed top-0 left-0 w-full z-10 transition-all ${
        theme === "light"
          ? "bg-white text-gray-900 shadow-lg"
          : "bg-gray-900 text-white shadow-2xl"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold transition-all duration-300 transform hover:scale-105">
          Movie App
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <Link
            to="/"
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            to="/watchlist"
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            Watchlist
          </Link>

          <button
            onClick={toggleTheme}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
          >
            {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700  focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className={`flex flex-col  items-center gap-4 p-4 mt-4 rounded-lg md:hidden ${
            theme === "light" ? "bg-gray-100" : "bg-gray-800"
          }`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="px-7 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/watchlist"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            Watchlist
          </Link>

          <button
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-700 transition-colors duration-300"
          >
            {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
