import { useOutletContext } from "react-router-dom";

import { useMatch } from "react-router-dom";
import MovieCard from "../MovieCard";
import PageTitle from "../PageTitle";
import type { MovieContext } from "../../types";

const MoviePage = () => {
  const { movies }: MovieContext = useOutletContext();
  
  const match = useMatch("/movies/:movieId");
  const movieId = match?.params.movieId;
  if (!movieId) return <p>Movie not found</p>;

  const movie = movies.find((m) => m.id.toString() === movieId);
  if (!movie) return <p>Movie not found</p>;
  return (
    <div>
      <PageTitle title={"Movie Page"} />
      <MovieCard movie={movie} />
    </div>
  );
};

export default MoviePage;
