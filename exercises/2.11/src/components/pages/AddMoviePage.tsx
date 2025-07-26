import { useOutletContext } from "react-router-dom";
import { MovieListContext } from "../../types";
import AddMovieForm from "../AddMovieForm";
import PageTitle from "../PageTitle";

const AddMoviePage = () => {
  const { onMovieAdded }: MovieListContext = useOutletContext();

  return (
    <div>
      <PageTitle title="Add a movie" />
      <AddMovieForm onMovieAdded={onMovieAdded} />
    </div>
  );
};

export default AddMoviePage;
