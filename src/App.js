import React, { Suspense } from "react";

import "./App.css";
import { Route, Navigate, BrowserRouter } from "react-router-dom";

import MovieDetail from "./pages/MovieDetail";
import DataManager from "./DataManager";
import { MovieContextProvider } from "./Context/MovieContext";

const EditMovie = React.lazy(() => import("./pages/EditMovie"));

function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <DataManager>
            <Route path="/" element={<Navigate to="/movies" />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/edit" element={<EditMovie />} />
          </DataManager>
        </Suspense>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
