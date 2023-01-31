import React, { useContext, useRef, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import { Button, Container, Grid, TextField } from "@mui/material";

const EditMovie = () => {
  const [editMovieId, setEditMovieId] = useState();
  const [isEditable, setIsEditable] = useState(false);
  const titleRef = useRef();
  const voteRef = useRef();
  const dateRef = useRef();
  const { moviesContext, allMovies } = useContext(MovieContext);

  const setMovieEditable = (id) => {
    setIsEditable(true);
    setEditMovieId(id);
  };
  const onCancelHandler = () => {
    setIsEditable(false);
    setEditMovieId("");
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const index = moviesContext.findIndex((item) => item.id === editMovieId);
    const movie = {
      ...moviesContext[index],
      title: titleRef.current.value,
      vote_average: voteRef.current.value,
      release_date: dateRef.current.value,
    };
    moviesContext.splice(index, 1, movie);
    allMovies.splice(index, 1, movie);
    setIsEditable(false);
    setEditMovieId("");
  };
  return (
    <Container
      maxWidth="true"
      sx={{ position: "absolute", my: 10, height: "90vh" }}
    >
      <Grid container>
        {moviesContext.map((movie, i) => {
          return (
            <Grid item md={12} key={`${movie.id}_${i}`} sx={{ width: "100%" }}>
              <form onSubmit={onSubmitHandler}>
                {isEditable && editMovieId === movie.id ? (
                  <TextField inputRef={titleRef} type="text" />
                ) : (
                  <TextField type="text" value={movie.title} disabled />
                )}
                {isEditable && editMovieId === movie.id ? (
                  <TextField
                    inputRef={voteRef}
                    type="number"
                    defaultValue={movie.vote_average}
                    inputProps={{
                      min: 0.1,
                      step: 0.1,
                      max: 10.0,
                    }}
                  />
                ) : (
                  <TextField
                    type="number"
                    value={movie.vote_average}
                    disabled
                  />
                )}
                {isEditable && editMovieId === movie.id ? (
                  <TextField inputRef={dateRef} type="text" />
                ) : (
                  <TextField type="text" value={movie.release_date} disabled />
                )}
                <>
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
                </>
              </form>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default EditMovie;
