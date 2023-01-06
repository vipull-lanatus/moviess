import "./App.css";
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AllMovies, { loader as getAllMovies } from "./pages/AllMovies";
import MovieDetail, { loader as getMovie } from "./pages/MovieDetail";
import EditMovie from "./pages/EditMovie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<p>Something went wrong...</p>}>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<AllMovies />} loader={getAllMovies} />
      <Route path="/movies/:id" element={<MovieDetail />} loader={getMovie} />
      <Route path="/edit" element={<EditMovie />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
