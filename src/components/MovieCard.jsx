import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

  return (
    <Link   to={{
        pathname: `/movie/${movie.id}`,  
        state:  movie  
      }}className="w-48 m-5">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-lg hover:scale-105 transition"
      />
      <h3 className="mt-2 text-sm font-semibold">{movie.title}</h3>
    </Link>
  );
};

export default MovieCard;
