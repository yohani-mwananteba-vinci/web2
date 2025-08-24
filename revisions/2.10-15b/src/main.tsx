import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CinemaPage from "./components/pages/CinemaPage";
import MovieListPage from "./components/pages/MovieListPage";
import HomePage from "./components/pages/HomePage";
import AddMoviePage from "./components/pages/AddMoviePage";
import MoviePage from "./components/pages/MoviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
      {
        path: "movies",
        element: <MovieListPage />,
      },

      {
        path: "movies/:movieId",
        element: <MoviePage />,
      },
      {
        path: "addMovie",
        element: <AddMoviePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
