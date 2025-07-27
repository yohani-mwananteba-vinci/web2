import { Movie } from "../types";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  // Remarque: Ajout d'un moyen de naviguer vers la page du détails du films ici (pas nécéssaire)
  const navigate = useNavigate();

  const handleIsClicked = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div className="card" onClick={handleIsClicked}>
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        {movie.imageUrl && (
          <img
            src={movie.imageUrl}
            className="card-img-top"
            alt={movie.title}
          />
        )}
        <p className="card-text">
          <strong>Réalisateur :</strong> {movie.director}
        </p>
        <p className="card-text">
          <strong>Durée :</strong> {movie.duration} minutes
        </p>
        {movie.budget && (
          <p className="card-text">
            <strong>Budget :</strong> {movie.budget} millions de dollars
          </p>
        )}
        {movie.description && (
          <p className="card-text">
            <strong>Description :</strong> {movie.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
