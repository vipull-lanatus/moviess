import React from "react";
import Movie from "./Movie";
import { Button, Container, Grid } from "@mui/material";

const Movies = (props) => {
  return (
    <Container maxWidth="true">
      <Grid
        container
        spacing={3}
        sx={{
          height: "auto",
          minHeight: "100vh",
        }}
      >
        {props.movies.map((item, i) => (
          <Grid key={`${item.id}_${i}`} item xs={12} sm={6} md={4}>
            <Movie key={`${item.id}_${i}`} movie={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Movies;
