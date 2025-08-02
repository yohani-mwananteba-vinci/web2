import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import UpdateMovieForm from "../UpdateMovieForm";
import PageTitle from "../PageTitle";

const UpdateMoviePage = () => {
  const { movies, onMovieUpdated }: MovieContext = useOutletContext();
  const match = useMatch("/movies/:id/update");
  const movieId = Number(match?.params.id);
  if (isNaN(movieId)) return <p>Movie not found</p>;

  const movieFound = movies.find((movie) => movie.id === movieId);

  if (!movieFound) return <p>Movie not found</p>;
  return (
    <div>
      <PageTitle title="Update a movie" />
      <UpdateMovieForm
        onMovieUpdated={onMovieUpdated}
        movieToUpdate={movieFound}
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default UpdateMoviePage;
