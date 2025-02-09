import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../utils/api'; // Ensure this function is correct
import { useTheme } from '../context/ThemeContext';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(id);
        console.log('Movie details fetched:', movieDetails); // Log the response
        setMovie(movieDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error); // Log the error
        setError('Failed to fetch movie details.');
        setLoading(false);
      }
    };
    getMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-white text-lg">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-white text-lg">
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-[#fff] text-gray-900' : 'bg-[#1f1f1f] text-white'}`}>
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Movie Poster */}
          <div className="w-full md:w-1/3">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Movie Details */}
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">{movie.title}</h1>
            <p className="text-gray-400 text-lg mb-4">{movie.overview}</p>
            <div className="text-xl font-semibold mb-2">
              <span className="text-yellow-400">Rating:</span> {movie.vote_average} / 10
            </div>
            <div className="text-lg text-gray-300 mb-2">
              <span className="font-semibold">Release Date:</span> {movie.release_date}
            </div>

            {/* Genre and other details */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Watch Trailer
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>

        {/* Back to list button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Back to Movies
          </button>
        </div>

        {/* Theme Toggle Button */}
        <div className="fixed bottom-5 right-5">
          <button
            onClick={toggleTheme}
            className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
