import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieCard from "../MovieCard";
import UpdateMovieForm from "../UpdateMovieForm";
import PageTitle from "../PageTitle";
import "./MoviePage.css";

const MoviePage = () => {
  const {
    movies,
    onMovieDeleted,
    onMovieUpdated,
    authenticatedUser,
  }: MovieContext = useOutletContext();

  const match = useMatch("/movies/:id");
  const movieId = Number(match?.params.id);
  if (isNaN(movieId)) return <p>Movie not found</p>;

  const movieFound = movies.find((movie) => movie.id === movieId);

  if (!movieFound) return <p>Movie not found</p>;

  return (
    <div className="movie-page">
      <MovieCard
        movie={movieFound}
        onMovieDeleted={authenticatedUser && onMovieDeleted}
      />
      <div>
        <PageTitle title={"Update the movie"} />
        <UpdateMovieForm
          movieToUpdate={movieFound}
          onMovieUpdated={onMovieUpdated}
        />
      </div>
    </div>
  );
};

export default MoviePage;
