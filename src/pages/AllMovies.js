import React, { useEffect, useState } from "react";
import { fetchMovies } from "../Data/Api";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Movies from "../components/Movies/Movies";
import MainHeader from "../components/Layout/MainHeader";
import NoMovieFound from "../components/Movies/NoMovieFound";

const AllMovies = () => {
  // Setting movies from loaded movies to all movies if movies is not available in localStorage
  // const [allMovies, setAllMovies] = useState(() => {
  //   if (localStorage.getItem("movies")) {
  //     return JSON.parse(localStorage.getItem("movies"));
  //   }
  //   return loadedMovies.results;
  // });
  //  Setting page by default to 2 if not available in localStorage
  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");

  const loadMoreMovies = async () => {
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };
  useEffect(() => {
    console.log({ page });
    let moreMovies = [];
    const fetchMoreMovies = async () => {
      moreMovies = await fetchMovies(page);
      setMovies(moreMovies.results);
      return moreMovies.results;
    };
    fetchMoreMovies();
    // setAllMovies([...allMovies]);
  }, [page]);
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
// export const loader = () => {
//   return fetchMovies();
// };
