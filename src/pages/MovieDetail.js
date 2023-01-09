import React from "react";
import { fetchMovie } from "../Data/Api";
import { useLoaderData } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const MovieDetail = () => {
  const movie = useLoaderData();
  const trailerLink = movie.videos.results.find(
    (item) => item.type === "Trailer" && item.key
  ).key;
  console.log({ movie });
  console.log({ trailerLink });

  return (
    <Container maxWidth="true" sx={{ backgroundColor: "var(--light)" }}>
      <Grid
        container
        sx={{
          minHeight: "100vh",
          height: "auto",
          display: "flex",
          justifyContent: "space-around",
          boxShadow: "none",
        }}
      >
        <Grid
          item
          md={4}
          sm={12}
          sx={{
            mt: 8,

            maxHeight: "100vh",
            borderRadius: "10px",
            zIndex: 1,
            boxShadow: "none",
          }}
        >
          <img
            component="img"
            alt="Not found"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            style={{
              height: "80vh",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          item
          md={7}
          sm={8}
          sx={{
            mt: 8,
            height: "90vh",
            borderRadius: "0px 10px 10px 0px",
          }}
        >
          <Card
            sx={{
              height: "90vh",
              overflowY: "scroll",
              backgroundColor: "transparent",
              width: "100%",
              borderRadius: "0px 10px 10px 0px",
              color: "var(--primary)",
              boxShadow: "none",
            }}
          >
            <CardContent
              sx={{
                minHeight: "12rem",
                height: "auto",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                width="100%"
                fontWeight="900"
                sx={{
                  mt: 3,
                  textAlign: "center",
                }}
              >
                {movie.title}
              </Typography>
              <Typography
                gutterBottom
                textAlign="center"
                fontWeight="600"
                sx={{ opacity: 0.7 }}
              >
                {movie.tagline}
              </Typography>

              <Typography
                color="text.secondary"
                textAlign="center"
                sx={{ width: "90%", fontWeight: "600", my: 4, mx: "auto" }}
              >
                {movie.overview}
              </Typography>
              <Typography
                width="90%"
                textAlign="center"
                sx={{
                  mt: 4,
                  mb: 2,
                  mx: "auto",
                }}
              >
                <Button
                  onClick={() => {
                    window.open(
                      `https://www.youtube.com/watch?v=${trailerLink}`
                    );
                  }}
                  sx={{
                    border: "1px solid var(--primary)",
                    p: 1,
                    width: "100%",
                    color: "var(--primary)",
                    mx: "auto",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                      color: "var(--light)",
                    },
                  }}
                >
                  {" "}
                  Watch Trailer{" "}
                </Button>
              </Typography>
              {movie.homepage && (
                <Typography
                  width="90%"
                  textAlign="center"
                  sx={{
                    mt: 2,
                    mb: 4,
                    mx: "auto",
                  }}
                >
                  <Button
                    onClick={() => {
                      window.open(movie.homepage);
                    }}
                    sx={{
                      border: "1px solid var(--primary)",
                      p: 1,
                      width: "100%",
                      color: "var(--primary)",
                      mx: "auto",
                      fontWeight: "600",
                      letterSpacing: "1.5px",
                      "&:hover": {
                        backgroundColor: "var(--primary)",
                        color: "var(--light)",
                      },
                    }}
                  >
                    {movie.homepage.includes("netflix")
                      ? "Watch on netflix"
                      : "Movie homepage"}
                  </Button>
                </Typography>
              )}
              <Divider />
              <Grid
                sx={{
                  width: "90%",
                  mt: 4,
                  mx: "auto",
                  color: "black",
                  opacity: 0.6,
                }}
              >
                <Typography gutterBottom sx={{ fontWeight: "700" }}>
                  Runtime :{" "}
                  {movie.runtime ? `${movie.runtime} mins` : "undefined"}
                </Typography>
                <Typography gutterBottom sx={{ fontWeight: "700" }}>
                  From :{" "}
                  {movie.belongs_to_collection
                    ? movie.belongs_to_collection.name
                    : "undefined"}
                </Typography>
                <Typography gutterBottom sx={{ fontWeight: "700" }}>
                  Release date :{" "}
                  {movie.release_date ? movie.release_date : "undefined"}
                </Typography>
                <Typography gutterBottom sx={{ fontWeight: "700" }}>
                  Budget : {movie.budget ? movie.budget : "undefined"}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetail;

export const loader = ({ params }) => {
  const movieID = params.id;
  return fetchMovie(movieID);
};
