import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { Container, Grid } from "@mui/material";

const EditMovie = () => {
  const { allMovies, setAllMovies } = useContext(MovieContext);

  return (
    <Container maxWidth="true">
      <Grid container>
        {allMovies.map((movie) => {
          console.log({ movie });
          return (
            <>
              <Grid item md={2}>
                {movie.id}
              </Grid>
              <Grid item md={4}>
                {movie.title}
              </Grid>
              <Grid item md={3}>
                {movie.vote_average}
              </Grid>
              <Grid item md={3}>
                {movie.release_date}
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EditMovie;
