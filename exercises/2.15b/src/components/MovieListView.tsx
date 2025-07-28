import MovieCard from "./MovieCard";
import { Movie, MovieContext } from "../types";
import "./MovieListView.css";
import { useOutletContext } from "react-router-dom";

interface MovieListViewProps {
  movies: Movie[];
}

const MovieListView = ({ movies }: MovieListViewProps) => {
  const { onMovieToDelete }: MovieContext = useOutletContext();  //C: OK mais devait se trouver dans MovieListViewProps, pas ici
  return (
    <div>
      <ul className="movie-list-view">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieToDelete={onMovieToDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieListView;
