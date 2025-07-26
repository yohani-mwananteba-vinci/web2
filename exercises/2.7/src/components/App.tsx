import { useState, type SyntheticEvent } from "react";
import type { Film } from "../types";
import "./App.css";
import FilmList from "./FilmList";

// C: OK mais il aurait fallu diviser le code plusieurs fichiers représentant les composants (voir solution dans le repo)
//  => App, FilmList, FilmCard, AddFilmForm

function App() {
  const favoriteFilms: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      urlImage:
        "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg",
      description:
        "A thief who steals corporate secrets through dream-sharing technology.",
      budget: 160000000,
    },
    {
      id: 2,
      title: "Le Fabuleux Destin d'Amélie Poulain",
      director: "Jean-Pierre Jeunet",
      duration: 122,
      urlImage:
        "https://fr.web.img2.acsta.net/img/14/28/14285c344d92ed68b26bffc6afbca358.jpg",
      description:
        "Amélie, une jeune serveuse à Montmartre, décide de changer la vie de ceux qui l'entourent.",
      budget: 10000000,
    },
    {
      id: 3,
      title: "Parasite",
      director: "Bong Joon-ho",
      duration: 132,
      urlImage:
        "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
      description:
        "La famille Kim s'immisce peu à peu dans la vie d'une famille aisée.",
      budget: 11400000,
    },
    {
      id: 4,
      title: "The Grand Budapest Hotel",
      director: "Wes Anderson",
      duration: 99,
      urlImage:
        "https://fr.web.img3.acsta.net/pictures/14/01/20/12/06/239820.jpg",
      description:
        "Les aventures de Gustave H, concierge d'un célèbre hôtel européen.",
    },
    {
      id: 5,
      title: "Spirited Away",
      director: "Hayao Miyazaki",
      duration: 125,
      urlImage:
        "https://www.atmospheres53.org/wp-content/uploads/2022/04/le-voyage-aff-550x745.png",
      description:
        "Une jeune fille se retrouve piégée dans un monde mystérieux d'esprits.",
    },
  ];

  // C: Code lié au form à mettre dans un composant à part
  // Définit les états de base des colonnes du form
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [urlImage, setUrlImage] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);
  // Définit l'état de base du tableau
  const [films, setFilms] = useState(favoriteFilms);

  // Gère la soumission
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // console.log(
    //   "submit:",
    //   title,
    //   director,
    //   duration,
    //   urlImage,
    //   description,
    //   budget
    // );
    const newFilm = {
      id: nextFilmId(films),
      title: title,
      director: director,
      duration: duration,
      urlImage: urlImage ?? undefined,
      description: description ?? undefined,
      budget: budget ?? undefined,
    };

    setFilms([...films, newFilm]);
    console.log(films);
  };

  // Gère les changements de colonnes du form
  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    // console.log("change in titleInput:", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    // console.log("change in directorInput:", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    // console.log("change in durationInput:", Number(durationInput.value));
    setDuration(Number(durationInput.value)); //C: Il aurait fallut utiliser ParseInt ou parseFloat pour convertir en nombre
  };

  const handleUrlImage = (e: SyntheticEvent) => {
    const urlImageInput = e.target as HTMLInputElement;
    // console.log("change in urlImageInput:", urlImageInput.value);
    setUrlImage(urlImageInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    // console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    // console.log("change in budgetInput:", Number(budgetInput.value));
    setBudget(Number(budgetInput.value)); //C: Il aurait fallut utiliser ParseInt ou parseFloat pour convertir en nombre
  };

  // C:
  // -  Il fallait soigner un peu plus le rendu (Footer, Header, Page Title...)
  // -  Balise HTML pour les description => textarea
  // -  Fonction handle pas forcément nécessaire pour les inputs, on peut utiliser onChange directement
  //    Ex: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
  // -  !!!! Dans <FilmList>, films ne DOIT plus être le tb par défaut (favoriteFilms),
  //     mais le tb qui est lié à l'état (films)

  return (
    <div>
      <FilmList films={films} />

      <div>
        <br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="film">Film</label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            onChange={handleTitleChange}
            required
          />
          <label htmlFor="director">Director</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={handleDirectorChange}
            required
          />
          <label htmlFor="duration">Duration</label>
          <input
            value={duration}
            type="number"
            id="duration"
            name="duration"
            onChange={handleDurationChange}
            min="1"
            required
          />
          <label htmlFor="urlImage">Image URL</label>
          <input
            value={urlImage}
            type="url"
            id="urlImage"
            name="urlImage"
            onChange={handleUrlImage}
          />
          <label htmlFor="description">Description</label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            onChange={handleDescriptionChange}
          />
          <label htmlFor="budget">Budget</label>
          <input
            value={budget}
            type="number"
            id="budget"
            name="budget"
            onChange={handleBudgetChange}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
}

const nextFilmId = (films: Film[]) => {
  return films.reduce((maxId, film) => Math.max(maxId, film.id), 0) + 1;
};

export default App;
