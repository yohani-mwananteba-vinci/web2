// C: OK mais un fichier cinema.tsx était suffisant pour le composant Cinema
import Movie from "./Movie";  // C: Tableau d'interfaces ? => Conversion en type (dans un fichier types.ts) + importation

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((m) => (
        <li key={m.title}>
          <strong>{m.title}</strong> - Réalisateur : {m.director}
        </li>
      ))}
    </ul>
  </div>
);

export default Cinema;
