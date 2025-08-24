// import "./HomePage.css";
import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleList";
import PageTitle from "../PageTitle";

const HomePage = () => {
  const { movies }: MovieContext = useOutletContext();

  return (
    <div>
        <PageTitle title="HomePage" />

        <p>Bienvenue sur la HomePage !</p>

        <MovieTitleList movies={movies} />
        <br />
        <br />
        <br />
        <br />
    </div>
  );
};

export default HomePage;
