import { useOutletContext } from "react-router-dom";
import PageTitle from "../PageTitle";
import FavoriteMovieList from "../FavoriteMovieList";
import { MovieContext } from "../../types";

const HomePage = () => {
  const { movies } : MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="myMovies" />
      <p>
        Welcome to myMovies, a site where you can find info about cinemas,
        movies...
      </p>
      <h2>My favorites Movies</h2>
      <FavoriteMovieList movies={movies} />
    </div>
  );
};
export default HomePage;
