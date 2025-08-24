import { useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../types";
import AddMovieForm from "../AddMovieForm";
import PageTitle from "../PageTitle";

const AddMoviePage = () => {
  const { onMovieAdded }: MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title={"Add a Movie"} />
      <AddMovieForm onMovieAdded={onMovieAdded} />
    </div>
  );
};

export default AddMoviePage;
