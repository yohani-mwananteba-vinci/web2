import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const { movies, onMovieDeleted, authenticatedUser }: MovieContext = useOutletContext();

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView movies={movies} onMovieDeleted={onMovieDeleted} authenticatedUser={authenticatedUser}/>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
