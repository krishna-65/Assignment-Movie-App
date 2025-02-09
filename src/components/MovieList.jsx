import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "./MovieCard";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const moviesPerPage = 8; // Show 8 movies per page

export default function MovieList({ movies }) {
  const [filteredMovies, setFilteredMovies] = useState({});
  const [currentPage, setCurrentPage] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Movies");

  const categoriesOrder = ["All Movies","Latest", "Action", "Horror", "Romance", ];

  // Function to categorize movies
  const filterMovies = () => {
    const filtered = movies.reduce((acc, movie) => {
      if (!acc["All Movies"]) acc["All Movies"] = [];
      acc["All Movies"].push(movie);

      if (new Date(movie.release_date) > new Date("2024-01-01")) {
        if (!acc.Latest) acc.Latest = [];
        acc.Latest.push(movie);
      }

      if (movie.genre_ids?.includes(28)) {
        if (!acc.Action) acc.Action = [];
        acc.Action.push(movie);
      }

      if (movie.genre_ids?.includes(27)) {
        if (!acc.Horror) acc.Horror = [];
        acc.Horror.push(movie);
      }

      if (movie.genre_ids?.includes(10749)) {
        if (!acc.Romance) acc.Romance = [];
        acc.Romance.push(movie);
      }

      return acc;
    }, {});

    setFilteredMovies(filtered);

    // Initialize page state for each category
    const pages = {};
    Object.keys(filtered).forEach((category) => {
      pages[category] = 1;
    });
    setCurrentPage(pages);
  };

  useEffect(() => {
    filterMovies();
  }, [movies]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  

  const getFilteredMoviesBySearch = (categoryMovies) => {
    if (!searchTerm) return categoryMovies;
    return categoryMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="p-6 relative">
       

     
        <div className="flex md:flex-row flex-col-reverse justify-between items-center">
           <div className="flex flex-col md:flex-row m-2"> {categoriesOrder.map(category =>
            <button key={category}
            onClick={(e) => setSelectedCategory(e.target.innerHTML)}
            className={`${category===selectedCategory?"bg-blue-500 text-white":"bg-transparent border"} m-3  px-7 py-2 font-semibold  rounded shadow hover:scale-95 transition-all duration-200`}
          >
            {category}
          </button>
          )}</div>
                <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-3  bg-gray-200 w-[300px] rounded-lg shadow-md text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 bg-transparent border  focus:ring-indigo-500"
        />
        </div>

        {filteredMovies[selectedCategory]?.length > 0 ? (
  <div>
    <h2 className="text-2xl font-bold text-white mb-4">{selectedCategory}</h2>

    {/* Movie Grid */}
    <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <AnimatePresence>
        {getFilteredMoviesBySearch(filteredMovies[selectedCategory])
          .slice(
            (currentPage[selectedCategory] - 1) * moviesPerPage,
            currentPage[selectedCategory] * moviesPerPage
          )
          .map((movie) => (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="hover:scale-105 transition-transform"
            >
              <MovieCard movie={movie} />
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>

    {/* Pagination Controls */}
    {Math.ceil(filteredMovies[selectedCategory].length / moviesPerPage) > 1 && (
      <div className="flex justify-center items-center mt-4 space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setCurrentPage((prev) => ({
              ...prev,
              [selectedCategory]: Math.max(prev[selectedCategory] - 1, 1),
            }))
          }
          disabled={currentPage[selectedCategory] === 1}
          className="p-3 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 transition-all disabled:opacity-50"
        >
          <FaChevronLeft size={20} />
        </motion.button>

        <span className="text-lg font-semibold text-white">
          Page {currentPage[selectedCategory]} of{" "}
          {Math.ceil(filteredMovies[selectedCategory].length / moviesPerPage)}
        </span>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            setCurrentPage((prev) => ({
              ...prev,
              [selectedCategory]: Math.min(
                prev[selectedCategory] + 1,
                Math.ceil(filteredMovies[selectedCategory].length / moviesPerPage)
              ),
            }))
          }
          disabled={
            currentPage[selectedCategory] ===
            Math.ceil(filteredMovies[selectedCategory].length / moviesPerPage)
          }
          className="p-3 bg-gray-200 rounded-full shadow-lg hover:bg-gray-300 transition-all disabled:opacity-50"
        >
          <FaChevronRight size={20} />
        </motion.button>
      </div>
    )}
  </div>
) : (
  <div className="text-center text-white py-8">
    <h2 className="text-xl font-semibold text-gray-600">No movies available in this category</h2>
  </div>
)}

    </div>
  );
}
