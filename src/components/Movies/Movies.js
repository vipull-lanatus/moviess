import React from "react";
import Movie from "./Movie";
import style from "./Movies.module.css";
const Movies = (props) => {
  return (
    <div className={style.movies}>
      {props.movies.map((item, i) => (
        <Movie key={`${item.id}_${i}`} movie={item} />
      ))}
    </div>
  );
};

export default Movies;
