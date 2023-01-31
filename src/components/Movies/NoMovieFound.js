import { SearchOff } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const NoMovieFound = () => {
  return (
    <Container maxWidth="true" disableGutters>
      <Grid
        container
        sx={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item md={12} textAlign="center" color="gray">
          <SearchOff sx={{ height: "5rem", width: "5rem" }} />
          <Typography>No movie found</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NoMovieFound;
