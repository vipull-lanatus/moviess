import React from "react";
import { fetchMovie } from "../Data/Api";
import { useLoaderData } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const MovieDetail = () => {
  const movie = useLoaderData();
  console.log({ movie });

  return (
    <Container maxWidth disableGutters sx={{ backgroundColor: "var(--light)" }}>
      <Grid
        container
        sx={{
          minHeight: "100vh",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          md={4}
          sm={12}
          sx={{
            maxHeight: "100vh",
            borderRadius: "10px",
            boxShadow: "5px 0 10px -4px gray",
            zIndex: 1,
          }}
        >
          <CardMedia
            component="img"
            alt="Not found"
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            sx={{
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
        <Grid
          item
          md={8}
          sm={8}
          sx={{
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
                  cursor: "pointer",
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
                textAlign="justify"
                sx={{ width: "90%", fontWeight: "600", my: 4, mx: "auto" }}
              >
                {movie.overview}
              </Typography>

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
