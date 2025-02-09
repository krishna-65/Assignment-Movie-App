import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FullScreenSlider({ movie }) {
  const [index, setIndex] = useState(0);

  // Extract backdrops from movies array
  const images = movie?.map(mov => mov.backdrop_path) || [];

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-[99vw] h-[40vh] md:h-[80vh] overflow-x-hidden">
      <AnimatePresence>
        {images.length > 0 && (
          <motion.img
            key={index}
            src={`https://image.tmdb.org/t/p/original${images[index]}`}
            className="absolute inset-0 w-full h-full  object-contain md:object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </AnimatePresence>
      {/* Optional: Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
