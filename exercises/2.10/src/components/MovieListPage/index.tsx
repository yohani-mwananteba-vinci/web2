import { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import "./MovieListPage.css";
import Footer from "../Footer/Footer"; // C: On pouvait supprimer le Footer import (on le met dans App.tsx comme ça il est partagé à toutes les pages)
import Header from "../Header/Header"; // C: Header import inutile ici, on le met dans App.tsx comme ça il est partagé à toutes les pages
import MovieListView from "./MovieListView";
import PageTitle from "../PageTitle/PageTitle";
import { Movie } from "../../types";

// C: On pouvait garder le nom de fichier MovieListPage.tsx, c'est cohérent avec le nom du composant
const MovieListPage = () => {
  const defaultMovies: Movie[] = [
    {
      title: "Shang-Chi and the Legend of the Ten Rings",
      director: "Destin Daniel Cretton",
      duration: 132,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
      description:
        "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      budget: 150,
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      budget: 63,
    },
    {
      title: "Summer Wars",
      director: "Mamoru Hosoda",
      duration: 114,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
      description:
        "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
      budget: 18.7,
    },
    {
      title: "The Meyerowitz Stories",
      director: "Noah Baumbach",
      duration: 112,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
      description:
        "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
    },
    {
      title: "her",
      director: "Spike Jonze",
      duration: 126,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
      description:
        "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      budget: 23,
    },
  ];

  const [movies, setMovies] = useState(defaultMovies);

  const onMovieAdded = (newMovie: Movie) => {
    console.log("Movie to add:", newMovie);
    setMovies([...movies, newMovie]);
  };

  // C: Header et Footer inutiles ici, ce sont des composants partagés, on les met dans App.tsx pour qu'ils soient visibles sur toutes les pages
  return (
    <div>
      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tous sur les films</h1>
      </Header>

      <main className="movieListPage-content">
        <PageTitle title="My favorite movies" />

        <MovieListView movies={movies} />

        <AddMovieForm onMovieAdded={onMovieAdded} />

        <br />
        <br />
        <br />
        <br />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>© myMovies</p>
      </Footer>
    </div>
  );
};

export default MovieListPage;
