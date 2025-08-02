import MovieCard from "./MovieCard";
import { Movie } from "../types";
import "./MovieListView.css";

interface MovieListViewProps {
  movies: Movie[];
  onMovieDeleted?: (movie: Movie) => void;
  handleUpdateMovieRequest?: (movie: Movie) => void;  //C: Il fallait une fonction pour gérer la redirection vers le formulaire de mise à jour
}

const MovieListView = ({
  movies,
  onMovieDeleted,
  handleUpdateMovieRequest,
}: MovieListViewProps) => {
  // C: Il fallait rediriger vers le formulaire de mise à jour à l'aide de la fonction passée dans le contexte MovieContext 
  return (
    <div>
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            onMovieDeleted={onMovieDeleted}
            handleUpdateMovieRequest={handleUpdateMovieRequest}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieListView;
