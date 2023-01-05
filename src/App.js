import "./App.css";
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AllMovies, { loader as getAllMovies } from "./pages/AllMovies";
import MovieDetail from "./pages/MovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<p>Something went wrong...</p>}>
      <Route path="/" element={<Navigate to="/movies" />} />
      <Route path="/movies" element={<AllMovies />} loader={getAllMovies} />
      <Route path="/movies/:id" element={<MovieDetail />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
