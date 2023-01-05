import React, { useState } from "react";
import Movies from "../components/Movies/Movies";
import MainHeader from "../components/Layout/MainHeader";
import { fetchMovies } from "../Data/Api";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AllMovies = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const loadedMovies = useLoaderData();
  const { results: allMovies } = loadedMovies;
  const [movies, setMovies] = useState(allMovies);
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");

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
    <>
      <MainHeader onChange={filterMoviesHandler} />
      {movies.length > 0 && (
        <Button
          onClick={changeSortingOrder}
          sx={{
            mt: "6.5rem",
            zIndex: "5",
            position: "absolute",
            ml: "4.7rem",
            height: "3rem",
            width: "15rem",
            backgroundColor: "var(--primary)",
            color: "var(--light)",
            "&:hover": {
              backgroundColor: "var(--primary)",
            },
          }}
        >
          Sort {sortingOrder === "asc" ? "Descending" : "Ascending"}
        </Button>
      )}
      {movies.length > 0 && <Movies movies={movies} />}
      {movies.length === 0 && <p>No movie found</p>}
    </>
  );
};

export default AllMovies;
export const loader = () => {
  return fetchMovies();
};
