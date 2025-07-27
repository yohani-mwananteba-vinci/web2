import { useMatch, useOutletContext } from "react-router-dom";
import PageTitle from "../PageTitle";
import { MovieContext } from "../../types";
import MovieCard from "../MovieCard";

const MoviePage = () => {
  const { movies }: MovieContext = useOutletContext();

  const match = useMatch("/movies/:movieId");
  const movieId = match?.params.movieId;
  if (!movieId) return <p>Movie not found</p>;

  const movie = movies.find((movie) => movie.id.toString() === movieId);
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <PageTitle title={"Page du film"} />
      <MovieCard movie={movie} />
    </div>
  );
};

export default MoviePage;
