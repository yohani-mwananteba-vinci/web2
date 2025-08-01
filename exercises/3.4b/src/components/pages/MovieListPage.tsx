import MovieListView from "../MovieListView";
import PageTitle from "../PageTitle";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const { movies, onMovieDeleted}: MovieContext =
    useOutletContext();
  const { authenticatedUser }: MovieContext = useOutletContext();
  // const { isToUpdate, setIsToUpdate } = useState(false);
  // const { movieToUpdate, setMovieToUpdate } = useState<Movie | undefined>(
  //   undefined
  // );

  return (
    <div>
      <PageTitle title="My favorite movies" />

      <MovieListView
        movies={movies}
        onMovieDeleted={authenticatedUser && onMovieDeleted}
      />
      <br />
      <br />
      <br />
      <br />
      {/* {isToUpdate ? (
        <UpdateMovieForm
          movieToUpdate={movieToUpdate}
          onMovieUpdated={onMovieUpdated}
        />
      ) : undefined} */}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;
