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
        minHeight: "24rem",
        height: "max-content",
        width: "17rem",
        margin: "1rem auto",
        borderRadius: "12px",
        color: "var(--light)",
      }}
    >
      <CardMedia
        component="img"
        alt="Not found"
        image={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
        sx={{ height: "auto", objectFit: "contain" }}
      />
      <CardContent
        sx={{
          backgroundColor: "var(--primary)",
          minHeight: "12rem",
          height: "auto",
          marginBottom: "0.042rem",
          textAlign: "justify",
        }}
      >
        <Typography gutterBottom variant="h6">
          {props.movie.title}
        </Typography>
        <Typography color="text.secondary" sx={{ fontWeight: "800" }}>
          {props.movie.release_date}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 0, height: "2.5rem", width: "100%" }}>
        <Link
          to={props.movie.id.toString()}
          style={{
            width: "100%",
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
              fontSize: "1rem",
              color: "var(--light)",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "transparent",
                border: "2px solid var(--primary)",
                color: "var(--primary)",
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
