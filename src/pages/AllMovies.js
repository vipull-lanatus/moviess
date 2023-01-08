import React, { useEffect, useState, useCallback } from "react";
import Movies from "../components/Movies/Movies";
import MainHeader from "../components/Layout/MainHeader";
import { fetchMovies } from "../Data/Api";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import NoMovieFound from "../components/Movies/NoMovieFound";
import { Button } from "@mui/material";

const AllMovies = () => {
  const loadedMovies = useLoaderData();
  let { results: allMovies } = loadedMovies;
  const [page, setPage] = useState(2);
  const [movies, setMovies] = useState(allMovies);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");
  let moreMovies = [];

  const loadMoreMovies = async () => {
    setPage((prevPage) => prevPage + 1);
    moreMovies = await fetchMovies(page);
    allMovies = [...allMovies, ...moreMovies.results];
    console.log({ allMovies });
    setMovies(allMovies);
  };

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
    <Container
      maxWidth="true"
      disableGutters
      sx={{ textAlign: "center", height: "auto" }}
    >
      <MainHeader onChange={filterMoviesHandler} onClick={changeSortingOrder} />
      {movies.length > 0 && <Movies movies={movies} />}
      {movies.length === 0 && <NoMovieFound />}
      <Button
        onClick={loadMoreMovies}
        sx={{
          py: 1,
          px: 3,
          border: "1px solid var(--primary)",
          my: 5,
          color: "var(--primary)",

          "&:hover": {
            backgroundColor: "var(--primary)",
            color: "var(--light)",
          },
        }}
      >
        Load more
      </Button>
    </Container>
  );
};

export default AllMovies;
export const loader = () => {
  return fetchMovies();
};
