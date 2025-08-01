import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieCard from "../MovieCard";

const MoviePage = () => {
  const { movies, onMovieDeleted, authenticatedUser }: MovieContext =
    useOutletContext();

  const match = useMatch("/movies/:id");
  const movieId = Number(match?.params.id);
  if (isNaN(movieId)) return <p>Movie not found</p>;

  const movieFound = movies.find((movie) => movie.id === movieId);

  if (!movieFound) return <p>Movie not found</p>;
  // C: Pas de param authenticatedUser, on utilise pour onMovieDeleted (condition: authenticatedUser != undefined et on lance onMovieDeleted)
  // => <MovieCard movie={movieFound} onMovieDeleted={authenticatedUser && onMovieDeleted} />;
  return (
    <MovieCard
      movie={movieFound}
      onMovieDeleted={onMovieDeleted}
      authenticatedUser={authenticatedUser}
    />
  );
};

export default MoviePage;
