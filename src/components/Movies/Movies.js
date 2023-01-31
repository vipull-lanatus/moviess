import React from "react";
import Movie from "./Movie";
import { Container, Grid } from "@mui/material";

const Movies = ({ movies, filterStr }) => {
  return (
    <Container
      maxWidth="true"
      sx={{ position: "absolute", my: 10, height: "90vh" }}
    >
      <Grid container>
        {movies.map((item, i) => (
          <Grid key={`${item.id}_${i}`} item xs={12} sm={6} md={4}>
            <Movie key={`${item.id}_${i}`} movie={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
