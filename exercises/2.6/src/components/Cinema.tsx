import { Movie } from "../types";
import MovieItem from "./MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];  // Remarque: On va utiliser un tableau de Movie, pas de MovieItem, Movie Item sert juste à gérer le conposant du film et ses interactions. (cacher/afficher la description)
}

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((movieItem) => (
        <MovieItem movie={movieItem} /> // C: ATTENTION !!! Il fallait ajouter une clé ici (movieItem.title, par exemple)
      ))}
    </ul>
  </div>
);

export default Cinema;
