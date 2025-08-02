import { SyntheticEvent, useState } from "react";
import { Movie } from "../types";
import "./AddMovieForm.css";

interface UpdateMovieFormProps {
  movieToUpdate: Movie;
  onMovieUpdated: (movie: Movie) => void;
}
// C: Il fallait associer le formulaire de mise à jour à une page (UpdateMoviePage.tsx)
const UpdateMovieForm = ({
  onMovieUpdated,
  movieToUpdate,
}: UpdateMovieFormProps) => {
  const [title, setTitle] = useState(movieToUpdate.title);
  const [director, setDirector] = useState(movieToUpdate.director);
  const [duration, setDuration] = useState<number | undefined>(
    movieToUpdate.duration ? movieToUpdate.duration : undefined
  );
  const [imageUrl, setImageUrl] = useState<string | undefined>(
    movieToUpdate.imageUrl ? movieToUpdate.imageUrl : undefined
  );
  const [description, setDescription] = useState<string | undefined>(
    movieToUpdate.description ? movieToUpdate.description : undefined
  );
  const [budget, setBudget] = useState<number | undefined>(
    movieToUpdate.budget ? movieToUpdate.budget : undefined
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onMovieUpdated({
      id: movieToUpdate.id,
      title,
      director,
      duration: duration ?? movieToUpdate.duration,
      imageUrl: imageUrl ?? movieToUpdate.imageUrl,
      description: description ?? movieToUpdate.description,
      budget: budget ?? movieToUpdate.budget,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Titre :</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Réalisateur :</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Durée :</label>
        <input
          type="number"
          value={duration ?? ""}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
      </div>
      <div>
        <label>URL de l'image :</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
        <label>Description :</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Budget :</label>
        <input
          type="number"
          value={budget ?? ""}
          onChange={(e) => setBudget(parseInt(e.target.value))}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateMovieForm;
