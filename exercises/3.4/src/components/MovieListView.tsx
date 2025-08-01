import MovieCard from "./MovieCard";
import { MaybeAuthenticatedUser, Movie } from "../types";
import "./MovieListView.css";

interface MovieListViewProps {
  movies: Movie[];
  onMovieDeleted: (movie: Movie) => void;
  authenticatedUser: MaybeAuthenticatedUser;
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
