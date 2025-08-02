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
    onMovieUpdated, // C: Il fallait mettre la fonction gérant la navigation vers la page de mise à jour (handleEditMovieRequest)
    authenticatedUser,
  }: MovieContext = useOutletContext();

  const match = useMatch("/movies/:id");
  const movieId = Number(match?.params.id);
  if (isNaN(movieId)) return <p>Movie not found</p>;

  const movieFound = movies.find((movie) => movie.id === movieId);

  if (!movieFound) return <p>Movie not found</p>;

  // C: Pas de updateMovieForm ici, on lui fait une page dédiée (UpdateMovie)
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
