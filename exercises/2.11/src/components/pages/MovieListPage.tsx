import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { MovieListContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  // C (Remarque) : On ne garde plus de partie liée à l'état dans ce composant.
  // Même les données par défaut sont gérées dans App.tsx
  // On utilise useOutletContext pour récupérer les données du contexte MovieListContext.

  const { movies }: MovieListContext = useOutletContext();

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
