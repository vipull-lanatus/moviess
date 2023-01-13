import React, { useContext, useEffect } from "react";
import { fetchMovies } from "../Data/Api";
import { Container } from "@mui/system";
import Movies from "../components/Movies/Movies";
import NoMovieFound from "../components/Movies/NoMovieFound";
import { MovieContext } from "../Context/MovieContext";

const AllMovies = () => {
  const { moviesContext, setMoviesContext, setAllMovies } =
    useContext(MovieContext);

  // to fetch movies from TMDB Movie API --start
  useEffect(() => {
    let moreMovies = [];
    const fetchMoreMovies = async () => {
      moreMovies = await fetchMovies();
      setAllMovies([...moreMovies.results]);
      setMoviesContext([...moreMovies.results]);
    };
    fetchMoreMovies();
  }, [setMoviesContext, setAllMovies]);
  // to fetch movies from TMDB Movie API --end

  return (
    <Container
      maxWidth="true"
      disableGutters
      sx={{ textAlign: "center", height: "auto" }}
    >
      {moviesContext.length > 0 && <Movies movies={moviesContext} />}
      {moviesContext.length === 0 && <NoMovieFound />}
    </Container>
  );
};

export default AllMovies;
