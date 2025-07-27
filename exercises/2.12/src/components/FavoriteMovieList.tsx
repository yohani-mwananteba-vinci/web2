import { Link } from "react-router-dom";
import { Movie } from "../types";

interface FavoriteMovieListProps {
  movies: Movie[];
}

const FavoriteMovieList = ({ movies }: FavoriteMovieListProps) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            style={{ display: "block" }}
          >
            <strong>{movie.title}</strong>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMovieList;
