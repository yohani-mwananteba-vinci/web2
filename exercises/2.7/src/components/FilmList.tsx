import "./FilmList.css";
import type { Film } from "../types";

interface FilmListProps {
  films: Film[];
}

// C: Ok mais il aurait fallu diviser le code plusieurs fichiers représentant les composants
// => 1 coposant FilmList.tsx, 1 composant FilmCard.tsx
const FilmList = ({ films }: FilmListProps) => {
    // C: Le titre suffisait comme ID
  return (
    <div className="film-list">
      {films.map((f) => (
        <div key={f.id}>
          <h2>
            {f.title} by {f.director}
          </h2>
          {f.urlImage ? (
            <img src={f.urlImage} alt="" className="film-img" />
          ) : null}
          <strong>
            <p>{f.duration} min</p>
          </strong>
          {f.budget ? <p> Budget: {f.budget} $</p> : null}
          {f.description ? (
            <p>
              <i>{f.description} </i>
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FilmList;
