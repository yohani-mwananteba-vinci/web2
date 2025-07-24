import "./MovieItem.css";
import { useState } from "react";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  // C: Solution alternative :
  // <li onClick={() => setDescriptionVisible(!descriptionVisible)}>

  const handleShowDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <li key={movie.title} onClick={handleShowDescription}>
      <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      {showDescription === true ? (
        <p className="movieItemDescr"> {movie.description} </p>
      ) : null}
    </li>
  );
};

export default MovieItem;
