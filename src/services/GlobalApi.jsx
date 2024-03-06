import axios from 'axios'

const apiKey = '2ee68e3a'
const movieBaseUrl = 'http://www.omdbapi.com/'

// Function to fetch movie details by ID
export const getMovieDetailsById = async (movieId) => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}?i=${movieId}&apikey=${apiKey}`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching movie details:', error)
    throw error
  }
}

// Function to fetch trending movies
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}?s=movie&type=movie&apikey=${apiKey}`
    )
    return response.data.Search
  } catch (error) {
    console.error('Error fetching trending movies:', error)
    throw error
  }
}
