export const fetchMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=144f6087e03002cc3af283b78ee6050d"
  );

  if (!response.ok) {
    throw { message: "Can't find any movie", status: 404 };
  }

  return response.json();
};
