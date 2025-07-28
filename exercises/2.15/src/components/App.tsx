import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import { Movie, MovieContext, NewMovie } from "../types";
// C: Les fonctions async doivent être mise dans un fichier ../utils/services/film-service.ts
// et être importées ici

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  const onMovieAdded = async (newMovie: NewMovie) => {
    console.log("Movie to add:", newMovie);
    try {
      // C:
      // - La partie options + response aurait dû être mise dans une fonction async addMovie(newMovie: NewMovie) : Promise<Movie>
      //   => Cette fonction aurait dû être dans un fichier ../utils/services/film-service.ts (voir ci-dessous pour voir le code de ce fichier)
      // - Manière + concise d'écrire response => (voir ci-dessous pour voir le code de ce fichier)
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

      const movieToBeAdded = await response.json(); //C: Aurait dû faire à une fonction async addMovie(newMovie: NewMovie) : Promise<Movie>
      setMovies([...movies, movieToBeAdded]); //C: On aurait dû appeler await initMovies() pour récupérer les films
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

  // C: La fonction aurait pû s'appeler intitMovies et la fonction getAllMovies, fetchMovies
  const fetchMovies = async () => {
    try {
      const movies = await getAllMovies();
      setMovies(movies);
    } catch (error) {
      console.error("HomePage::error: ", error);
    }
  };

  // C: Il fallait mettre cette fonction dans un fichier ../utils/services/film-service.ts et l'importer ici
  async function getAllMovies() {
    try {
      const response = await fetch("/api/films/");
      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      const movies = await response.json();

      // C: Il fallait vérifier que movies est un tableau et n'est pas vide
      // if (!movies || !Array.isArray(movies)) {
      //   throw new Error("Invalid data");
      // }

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

// C: Voici à quoi ressemblerait le fichier ../utils/services/film-service.ts
// import { Movie, NewMovie } from "../types";

// const fetchMovies = async (): Promise<Movie[]> => {
//   try {
//     const response = await fetch("/api/films");
//     if (!response.ok) {
//       throw new Error("Failed to fetch movies : " + response.statusText);
//     }
//     const data = await response.json();
//     if (!data || !Array.isArray(data)) {
//       throw new Error("Invalid data");
//     }
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// const addMovie = async (movie: NewMovie): Promise<Movie> => {
//   try {
//     const response = await fetch("/api/films", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(movie),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to add movie : " + response.statusText);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export { fetchMovies, addMovie };
