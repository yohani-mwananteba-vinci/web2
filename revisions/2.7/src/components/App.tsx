import { useState } from "react";
import type { Film } from "../types";
import "./App.css";
import FilmList from "./FilmList";
import AddFilm from "./AddFilm";

const defaultFilms: Film[] = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzVMGKgd7-eVD4C7fI8gNIqeJbN3NvqJUlg&s",
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
    budget: 160000000,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl: "https://media.s-bol.com/xwzgJVLXOxwl/kRLB0pK/550x825.jpg",
    description:
      "A computer hacker learns about the true nature of his reality.",
    budget: 63000000,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    duration: 169,
    imageUrl: "https://m.media-amazon.com/images/I/91obuWzA3XL.jpg",
    description: "A team of explorers travel through a wormhole in space.",
    budget: 165000000,
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    imageUrl: "https://fr.web.img6.acsta.net/pictures/20/02/12/13/58/3992754.jpg",
    description:
      "A poor family schemes to become employed by a wealthy family.",
    budget: 11400000,
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duration: 125,
    imageUrl: "https://i.ebayimg.com/images/g/Ck8AAOSwdFNihkNW/s-l1200.jpg",
    description:
      "A young girl enters a world of spirits and must find her way home.",
    budget: 19000000,
  },
];
function App() {
  const [films, setFilms] = useState(defaultFilms);

  const addFilm = (newFilm: Film) => {
    const filmAdded = { ...newFilm };
    setFilms([...films, filmAdded]);
  };

  return (
    <>
      <h1>Application Film</h1>
      <FilmList films={films} />
      <h1>Add a Film</h1>
      <AddFilm addFilm={addFilm} />
    </>
  );
}

export default App;
