import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Import the useTheme hook

const Footer = () => {
  const { theme } = useTheme(); // Access the theme from context

  return (
    <footer
      className={`py-12 mt-16 ${theme === 'light' ? 'bg-gray-200' : 'bg-[#1f1f1f]'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/3">
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>About Us</h3>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-800'}`}>
              We are a movie platform providing a great collection of films and TV shows for you to enjoy!
            </p>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Quick Links</h3>
            <ul className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-800'}`}>
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                Twitter
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className={`mt-12 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'} pt-6 text-center`}>
          <p className={`text-gray-400 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            &copy; {new Date().getFullYear()} MoviePlatform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
