import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import AddMovieForm from "../AddMovieForm";
import PageTitle from "../PageTitle";

const AddMoviePage = () => {
  const { onMovieAdded, authenticatedUser }: MovieContext = useOutletContext();   // C: Pas de authenticatedUser dans le contexte (à éviter pour des raisons de sécurité)

  //C: ne pas utiliser authenticatedUser dans le formulaire d'ajout de film
  return (
    <div>
      <PageTitle title="Add a movie" />
      <AddMovieForm
        onMovieAdded={onMovieAdded}
        authenticatedUser={authenticatedUser}
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddMoviePage;
