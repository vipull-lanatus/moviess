import React, { useContext } from "react";
import { Container } from "@mui/system";
import Movies from "../components/Movies/Movies";
import NoMovieFound from "../components/Movies/NoMovieFound";
import { MovieContext } from "../Context/MovieContext";

const AllMovies = () => {
  const { moviesContext } = useContext(MovieContext);

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
