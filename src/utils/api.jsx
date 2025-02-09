import axios from "axios";

const API_KEY='96413657561d38f0181e8238a405791c'
const BASE_URL='https://api.themoviedb.org/3/'


export const fetchMovies = async (category = 'popular') => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${category}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};



