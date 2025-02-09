import React, { createContext, useState, useContext } from 'react';

// Create the context
const ThemeContext = createContext();

// Custom hook to access the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// ThemeProvider component to wrap the app and provide the theme context
export const ThemeProviders = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
