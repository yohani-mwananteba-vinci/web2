import { Movie } from "../types";
import MovieItem from "./MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((movieItem) => (
        <MovieItem movie={movieItem} />
      ))}
    </ul>
  </div>
);

export default Cinema;
