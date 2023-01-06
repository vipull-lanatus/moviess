import { Container } from "@mui/system";
import React from "react";

const NoMovieFound = () => {
  return (
    <Container
      maxWidth="true"
      disableGutters
      sx={{ display: "grid", placeItems: "center" }}
    ></Container>
  );
};

export default NoMovieFound;
