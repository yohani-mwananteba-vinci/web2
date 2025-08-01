import MovieCard from "./MovieCard";
import { MaybeAuthenticatedUser, Movie } from "../types";
import "./MovieListView.css";

interface MovieListViewProps {
  movies: Movie[];
  onMovieDeleted: (movie: Movie) => void;   //C: Il fallait rendre la fonction onMovieDeleted optionnelle
  authenticatedUser: MaybeAuthenticatedUser;  //C: Pas de user ici, on rend onMovieDeleted optionnel à la place
}

const MovieListView = ({
  movies,
  onMovieDeleted,
  authenticatedUser,
}: MovieListViewProps) => {
  return (
    <div>
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            onMovieDeleted={onMovieDeleted}
            authenticatedUser={authenticatedUser}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieListView;
