import type { Film } from "../types";

interface FilmItemProps {
  film: Film;
}

const FilmItem = ({ film }: FilmItemProps) => {
  return (
    <div>
      <h2>{film.title}</h2>
      {film.imageUrl ? <img src={film.imageUrl} alt="Img Films" /> : null}
      <p>Director: {film.director}</p>
      <p>Duration: {film.duration}</p>
      {film.budget ? <p>Budget: {film.budget} $</p> : null}
      {film.description ? <p>Description: {film.description}</p> : null}
    </div>
  );
};

export default FilmItem;
