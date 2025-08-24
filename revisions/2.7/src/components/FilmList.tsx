import type { Film } from "../types";
import FilmItem from "./FilmItem";

interface FilmListProps {
  films: Film[];
}

const FilmList = ({ films }: FilmListProps) => {
  return (
    <div>
      {films.map((f, index) => (
        <div key={index}>
          <FilmItem film={f} />
        </div>
      ))}
    </div>
  );
};

export default FilmList;
