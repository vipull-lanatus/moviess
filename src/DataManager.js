import React, { useContext } from "react";
import MainHeader from "./components/Layout/MainHeader";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { MovieContext } from "./Context/MovieContext";

const AllMovies = React.lazy(() => import("./pages/AllMovies"));

const DataManager = ({ children }) => {
  const { moviesContext, setMoviesContext, allMovies } =
    useContext(MovieContext);

  //For Sorting
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const sortingOrder = queryParams.get("sort");
  //For Sorting

  // to Filter movie on search --start
  const filterMoviesHandler = (str) => {
    str.trim().length !== 0
      ? setMoviesContext(
          allMovies.filter((movie) =>
            movie.title.toUpperCase().includes(str.toUpperCase())
          )
        )
      : setMoviesContext(allMovies);
  };
  // to Filter movie on search --end

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

  return (
    <>
      <MainHeader
        filterMoviesHandler={filterMoviesHandler}
        changeSortingOrder={changeSortingOrder}
      />
      <Routes>
        <Route path="/movies" element={<AllMovies movies={moviesContext} />} />
        {children}
      </Routes>
    </>
  );
};

export default DataManager;