import React, { useContext, useRef, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import { Button, Container, Grid, Input, TextField } from "@mui/material";

const EditMovie = () => {
  const [editMovieId, setEditMovieId] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const [editMovie, setEditMovie] = useState({});
  const titleRef = useRef();
  const voteRef = useRef();
  const dateRef = useRef();
  const { moviesContext } = useContext(MovieContext);

  console.log({ moviesContext });

  const setMovieEditable = (id) => {
    setIsEditable(true);
    setEditMovieId(id);
    const movie = moviesContext.find((item) => item.id === id);
    setEditMovie(movie);
  };
  const onCancelHandler = () => {
    setIsEditable(false);
    setEditMovieId("");
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    setEditMovie((prevMovie) => {
      return {
        ...prevMovie,
        title: "Name changed",
      };
    });

    const index = moviesContext.findIndex((item) => item.id === editMovieId);

    setIsEditable(false);
    setEditMovieId("");
  };

  return (
    <Container maxWidth="true">
      <Grid container>
        {moviesContext.map((movie, i) => {
          return (
            <Grid item md={12} key={`${movie.id}_${i}`}>
              <form onSubmit={onSubmitHandler}>
                {isEditable && editMovieId === movie.id ? (
                  <TextField ref={titleRef} type="text" />
                ) : (
                  <TextField type="text" value={movie.title} disabled />
                )}
                {isEditable && editMovieId === movie.id ? (
                  <TextField
                    ref={voteRef}
                    type="number"
                    defaultValue={movie.vote_average}
                    inputProps={{
                      min: 0.1,
                      step: 0.1,
                      max: 10.0,
                    }}
                  />
                ) : (
                  <TextField type="text" value={movie.vote_average} disabled />
                )}
                {isEditable && editMovieId === movie.id ? (
                  <TextField ref={dateRef} type="text" />
                ) : (
                  <TextField type="text" value={movie.release_date} disabled />
                )}
                <div>
                  {editMovieId !== movie.id && (
                    <Button onClick={setMovieEditable.bind(null, movie.id)}>
                      Edit
                    </Button>
                  )}
                  {isEditable && editMovieId === movie.id && (
                    <>
                      <Button type="submit">Save</Button>
                      <Button onClick={onCancelHandler}>Cancel</Button>
                    </>
                  )}
                </div>
              </form>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EditMovie;
