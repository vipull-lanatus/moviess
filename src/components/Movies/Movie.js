import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const Movie = (props) => {
  return (
    <Card
      sx={{
        p: 0,
        minHeight: "30rem",
        height: "max-content",
        width: "22rem",
        backgroundColor: "transparent",
        margin: "1rem auto",
        border: "none",
        borderRadius: "12px",
        color: "var(--light)",
      }}
    >
      <CardMedia
        component="img"
        alt="Not found"
        image={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
        sx={{ height: "15rem" }}
      />
      <CardContent
        sx={{
          backgroundColor: "var(--primary)",
          minHeight: "12rem",
          height: "auto",
          marginBottom: "0.1rem",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.movie.title}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontWeight: "800" }}
        >
          {props.movie.release_date}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0, height: "3rem", width: "22rem" }}>
        <Link
          to={props.movie.id.toString()}
          style={{
            width: "22rem",
            height: "100%",
            textDecoration: "none",
          }}
        >
          <Button
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "var(--primary)",
              borderRadius: "0px 0px 12px 12px",
              fontSize: "1.2rem",
              color: "var(--light)",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#850000 ",
              },
            }}
          >
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Movie;
