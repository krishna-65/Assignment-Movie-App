import React from 'react';

import FullScreenSlider from '../components/HeroSlider';
import MovieList from '../components/MovieList';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Home = ({ movies, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="animate-pulse text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
        <Navbar/>
        <FullScreenSlider movie={movies}/>
        <MovieList movies={movies}/>
        <Footer/>
    </div>
  );
};

export default Home;
