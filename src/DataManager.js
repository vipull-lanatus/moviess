import React, { useContext, useEffect } from "react";
import MainHeader from "./components/Layout/MainHeader";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { fetchMovies } from "./Data/Api";
import { Box } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { MovieContext } from "./Context/MovieContext";
const AllMovies = React.lazy(() => import("./pages/AllMovies"));

const DataManager = ({ children }) => {
  const { moviesContext, setMoviesContext, allMovies, setAllMovies } =
    useContext(MovieContext);
  const [page, setPage] = useState(2);
  const [totalResults, setTotalResults] = useState(0);
  const fetchMoreData = async (newPage) => {
    let moreMovies = [];
    moreMovies = await fetchMovies(newPage);
    setAllMovies((prevMovies) => [...prevMovies, ...moreMovies.results]);
    setMoviesContext((prevMovies) => [...prevMovies, ...moreMovies.results]);
    setTotalResults(moreMovies.total_results);
    filterMoviesHandler();
  };

  // to fetch movies from TMDB Movie API --start
  useEffect(() => {
    let moreMovies = [];
    const fetchMoreMovies = async () => {
      moreMovies = await fetchMovies();
      setAllMovies([...moreMovies.results]);
      setMoviesContext([...moreMovies.results]);
    };
    fetchMoreMovies();
  }, [setMoviesContext, setAllMovies]);
  // to fetch movies from TMDB Movie API --end

  //For Sorting
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");
  // to change sorting order --start
  const changeSortingOrder = () => {
    navigate(`?sort=${sortingOrder === "asc" ? "desc" : "asc"}`);
    if (sortingOrder === "asc") {
      moviesContext.sort((movieX, movieY) => (movieX.id < movieY.id ? 1 : -1));
    } else {
      moviesContext.sort((movieX, movieY) => (movieX.id > movieY.id ? 1 : -1));
    }
  };
  // to change sorting order --end
  //For Sorting

  // to Filter movie on search --start
  const filterMoviesHandler = (str) => {
    str?.trim().length !== 0
      ? setMoviesContext(
          allMovies.filter((movie) =>
            movie?.title?.toUpperCase().includes(str.toUpperCase())
          )
        )
      : setMoviesContext(allMovies);
  };
  // to Filter movie on search --end

  return (
    <Box maxWidth="true">
      <MainHeader
        filterMoviesHandler={filterMoviesHandler}
        changeSortingOrder={changeSortingOrder}
      />
      <Routes>
        <Route
          path="/movies"
          element={
            <InfiniteScroll
              dataLength={moviesContext.length}
              next={() => {
                setPage((prevPage) => prevPage + 1);
                fetchMoreData(page);
              }}
              hasMore={moviesContext.length !== totalResults}
              loader={<p>Loading...</p>}
            >
              <AllMovies movies={moviesContext} />
            </InfiniteScroll>
          }
        />
        {children}
      </Routes>
    </Box>
  );
};

export default DataManager;
