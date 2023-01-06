import React, { useState } from "react";
import Movies from "../components/Movies/Movies";
import MainHeader from "../components/Layout/MainHeader";
import { fetchMovies } from "../Data/Api";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import NoMovieFound from "../components/Movies/NoMovieFound";

const AllMovies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loadedMovies = useLoaderData();
  const { results: allMovies } = loadedMovies;
  const [movies, setMovies] = useState(allMovies);
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");
  console.log({ allMovies });
  const filterMoviesHandler = (str) => {
    str.trim().length !== 0
      ? setMovies(
          allMovies.filter((movie) =>
            movie.title.toUpperCase().includes(str.toUpperCase())
          )
        )
      : setMovies(allMovies);
  };

  const changeSortingOrder = () => {
    navigate(`?sort=${sortingOrder === "asc" ? "desc" : "asc"}`);
    if (sortingOrder === "asc") {
      movies.sort((movieX, movieY) => (movieX.id < movieY.id ? 1 : -1));
    } else {
      movies.sort((movieX, movieY) => (movieX.id > movieY.id ? 1 : -1));
    }
  };

  return (
    <Container maxWidth="true" disableGutters>
      <MainHeader onChange={filterMoviesHandler} onClick={changeSortingOrder} />
      {movies.length > 0 && <Movies movies={movies} />}
      {movies.length === 0 && <NoMovieFound />}
    </Container>
  );
};

export default AllMovies;
export const loader = () => {
  return fetchMovies();
};
