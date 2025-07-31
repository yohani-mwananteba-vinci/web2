import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import { Movie, MovieContext, NewMovie } from "../types";
import { addMovie, deleteMovie, fetchMovies } from "../utils/film-service";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const storeName = "Theme";
  const navigate = useNavigate();

  // TODO KO: Pas réussi à donner la bonne valuer dans localStorage (le changement est persistant mais le localStorage affiche la couleur inverse)
  const setThemeSessionData = (theme: string) => {
    const storageValue = JSON.stringify(theme);
    localStorage.setItem(storeName, storageValue);
  };

  const getThemeSessionData = () => {
    const actualTheme = localStorage.getItem(storeName);
    if (!actualTheme) return;
    return JSON.parse(actualTheme);
  };

  const [storedTheme, setStoredTheme] = useState(
    getThemeSessionData() ?? "Light"
  );

  const switchTheme = (): string => {
    const newTheme = storedTheme === "Light" ? "Dark" : "Light";
    setStoredTheme(newTheme);
    setThemeSessionData(newTheme);
    return newTheme;
  };

  const initMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initMovies();
  }, []);

  const onMovieAdded = async (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    try {
      const movieToBeAdded = await addMovie(newMovie);
      console.log("Movie added:", movieToBeAdded);
      await initMovies();
      navigate("/movie-list");
    } catch (error) {
      console.error(error);
    }
  };

  const onMovieDeleted = async (movie: Movie) => {
    console.log("Movie to delete:", movie);

    try {
      await deleteMovie(movie);
      console.log("Movie deleted:", movie);
      await initMovies();
    } catch (error) {
      console.error(error);
    }
  };

  const movieContext: MovieContext = {
    movies,
    onMovieAdded,
    onMovieDeleted,
  };

  return (
    <div>
      <Header
        urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48="
        theme={storedTheme}
        switchTheme={switchTheme}
      >
        <h1>Tous sur les films</h1>
        <NavBar />
      </Header>

      <main className="page-content">
        <Outlet context={movieContext} />
      </main>

      <Footer
        urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4="
        theme={storedTheme}
      >
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default App;
