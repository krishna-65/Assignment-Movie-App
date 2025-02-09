import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = () => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(storedWatchlist);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6 mt-40">Your Watchlist 🎬</h2>

        {watchlist.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No movies in your watchlist.</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onWatchlistUpdate={fetchWatchlist} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
