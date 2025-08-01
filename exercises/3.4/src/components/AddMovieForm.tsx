import { SyntheticEvent, useState } from "react";
import { MaybeAuthenticatedUser, NewMovie } from "../types";
import "./indexForm.css";

interface AddMovieFormProps {
  onMovieAdded: (movie: NewMovie) => void;
  authenticatedUser: MaybeAuthenticatedUser;
}

const AddMovieForm = ({
  onMovieAdded,
  authenticatedUser,
}: AddMovieFormProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState<number | undefined>(undefined);
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [budget, setBudget] = useState<number | undefined>(undefined);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onMovieAdded({
      title,
      director,
      duration: duration ?? 0,
      imageUrl,
      description,
      budget,
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
      {authenticatedUser ? (
        <button type="submit">Ajouter</button>
      ) : (
        <p>
          <i>
            <strong>Nice try but you need have a account to add a movie ! :-P</strong>
          </i>
        </p>
      )}
    </form>
  );
};

export default AddMovieForm;
