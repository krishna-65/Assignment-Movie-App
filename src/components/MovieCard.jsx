import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";

const MovieCard = ({ movie, onWatchlistUpdate }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setIsInWatchlist(watchlist.some((item) => item.id === movie.id));
  }, [movie.id]);

  const toggleWatchlist = () => {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (isInWatchlist) {
      watchlist = watchlist.filter((item) => item.id !== movie.id);
    } else {
      watchlist.push(movie);
    }

    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setIsInWatchlist(!isInWatchlist);

    if (onWatchlistUpdate) {
      onWatchlistUpdate();
    }
  };

  return (
    <div className=" m-5 relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg transition hover:scale-105">
      {/* Watchlist Toggle Button */}
      <button
        onClick={toggleWatchlist}
        className="absolute top-3 right-3 text-xl p-2 rounded-full shadow-md 
                   bg-gray-800 text-yellow-400 z-20 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {isInWatchlist ? <FaStar /> : <FaRegStar />}
      </button>

      {/* Movie Link */}
      <Link to={{ pathname: `/movie/${movie.id}`, state: movie }} className="rounded">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[370px] object-cover "
        />
        <h3 className="text-sm font-semibold text-center p-2 bg-gray-900 text-white">
          {movie.title}
        </h3>
      </Link>
    </div>
  );
};

export default MovieCard;
