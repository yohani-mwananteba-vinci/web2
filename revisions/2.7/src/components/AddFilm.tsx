import { useState, type SyntheticEvent } from "react";
import type { Film } from "../types";

interface AddFilmProps {
  addFilm: (film: Film) => void;
}

const AddFilm = ({ addFilm }: AddFilmProps) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addFilm({
      title: title,
      director: director,
      duration: duration,
      imageUrl: imageUrl ?? null,
      description: description ?? null,
      budget: budget ?? 0,
    });
  };

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    // console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    // console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    // console.log(
    //   "change in durationInput:",
    //   Number.parseInt(durationInput.value)
    // );
    setDuration(Number.parseInt(durationInput.value));
  };

  const handleImageUrlChange = (e: SyntheticEvent) => {
    const imageUrlInput = e.target as HTMLInputElement;
    // console.log("change in imageUrlInput:", imageUrlInput.value);
    setImageUrl(imageUrlInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    // console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    // console.log("change in budgetInput:", Number.parseInt(budgetInput.value));
    setBudget(Number.parseInt(budgetInput.value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="film">Film</label>
        <input
          value={title}
          type="text"
          id="title"
          name="title"
          onChange={handleTitleChange}
          required
        />
        <label htmlFor="director">director</label>
        <input
          value={director}
          type="text"
          id="director"
          name="director"
          onChange={handleDirectorChange}
          required
        />
        <label htmlFor="duration">duration</label>
        <input
          value={duration}
          type="number"
          id="duration"
          name="duration"
          min={60}
          onChange={handleDurationChange}
          required
        />
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          value={imageUrl}
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleImageUrlChange}
        />
        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
        />
        <label htmlFor="budget">budget</label>
        <input
          value={budget}
          type="number"
          id="budget"
          name="budget"
          onChange={handleBudgetChange}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddFilm;
