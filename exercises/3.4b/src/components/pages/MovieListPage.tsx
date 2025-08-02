import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  // C: Il manque une méthode pour gérer la redirection vers le formulaire de mise à jour
  //   const { movies, onMovieDeleted, handleEditMovieRequest }: MovieContext = useOutletContext();
  const { movies, onMovieDeleted }: MovieContext = useOutletContext();
  const { authenticatedUser }: MovieContext = useOutletContext();

  // C: Il fallait en param de MovieListView la fonction handleEditMovieRequest={authenticatedUser && handleEditMovieRequest}
  //  => Gérer la redirection vers le formulaire de mise à jour + authentification de l'utilisateur
  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView
        movies={movies}
        onMovieDeleted={authenticatedUser && onMovieDeleted}
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
