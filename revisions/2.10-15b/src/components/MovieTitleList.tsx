import type { Movie } from "../types";
import "./MovieListView.css";
import { Link } from "react-router-dom";

interface MovieTitleListProps {
  movies: Movie[];
}

const MovieTitleList = ({ movies }: MovieTitleListProps) => {
  return (
    <div>
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            style={{ display: "block" }}
          >
            {movie.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MovieTitleList;
