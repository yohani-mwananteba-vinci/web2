import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import { Movie, MovieContext, NewMovie } from "../types";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const onMovieAdded = async (newMovie: NewMovie) => {
    try {
      console.log("Movie to add:", newMovie);

      const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch("/api/films", options); // fetch retourne une "promise" => on attend la réponse

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      const movieToBeAdded = await response.json();
      setMovies([...movies, movieToBeAdded]);
      navigate("/movie-list");
    } catch (error) {
      console.error("AddMoviePage::error: ", error);
    }
  };

  const movieContext: MovieContext = {
    movies,
    onMovieAdded,
  };

  useEffect(() => {
    fetchMovies();
    console.log(movies);
  }, []);

  const fetchMovies = async () => {
    try {
      const movies = await getAllMovies();
      setMovies(movies);
    } catch (error) {
      console.error("HomePage::error: ", error);
    }
  };

  async function getAllMovies() {
    try {
      const response = await fetch("/api/films/");
      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      const movies = await response.json();

      return movies;
    } catch (error) {
      console.error("getAllMovies::error: ", error);
      throw error;
    }
  }

  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
        <NavBar />
      </Header>

      <main className="page-content">
        <Outlet context={movieContext} />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default App;
