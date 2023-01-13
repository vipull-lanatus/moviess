import React, { useState } from "react";

export const MovieContext = React.createContext({});

export const MovieContextProvider = (props) => {
  const [moviesContext, setMoviesContext] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [movie, setMovie] = useState({});
  return (
    <MovieContext.Provider
      value={{
        moviesContext,
        setMoviesContext,
        allMovies,
        setAllMovies,
        movie,
        setMovie,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
