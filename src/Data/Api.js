const API_KEY = "144f6087e03002cc3af283b78ee6050d";

export const fetchMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw { message: "Can't find any movie", status: 404 };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
export const fetchMovie = async (movieID) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    );
    if (!response.ok) {
      throw { message: "Can't fetch this movie", status: 200 };
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};
