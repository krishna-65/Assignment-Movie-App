import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import MovieDetailsPage from './pages/MoviePage';
import Navbar from './components/Navbar';
import { fetchMovies } from './utils/api';
import Home from './pages/Home';
import Watchlist from './components/WatchList';

const App = () => {
  const { theme } = useTheme(); // Access the theme from context
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieList = await fetchMovies('popular');
        setMovies(movieList);
      } catch (err) {
        setError(err);
        console.error('Error fetching movies:', err);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#fff] text-gray-900' : 'bg-[#1f1f1f] text-white'} w-full overflow-x-hidden`}>
      <Router>
        <Routes>
          <Route path="/" element={<Home movies={movies} isLoading={isLoading} error={error} />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/watchlist" element={<Watchlist/>}/>
          <Route path="*" element={() => <h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
