import path from "node:path";

import { Film, NewFilm } from "../types";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Shang-Chi and the Legend of the Ten Rings",
    director: "Destin Daniel Cretton",
    duration: 132,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg",
    description:
      "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
    budget: 150,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    duration: 136,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    budget: 63,
  },
  {
    id: 3,
    title: "Summer Wars",
    director: "Mamoru Hosoda",
    duration: 114,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7d/Summer_Wars_poster.jpg",
    description:
      "A young math genius solves a complex equation and inadvertently puts a virtual world's artificial intelligence in a position to destroy Earth.",
    budget: 18.7,
  },
  {
    id: 4,
    title: "The Meyerowitz Stories",
    director: "Noah Baumbach",
    duration: 112,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/The_Meyerowitz_Stories.png",
    description:
      "An estranged family gathers together in New York City for an event celebrating the artistic work of their father.",
  },
  {
    id: 5,
    title: "her",
    director: "Spike Jonze",
    duration: 126,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Her2013Poster.jpg",
    description:
      "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    budget: 23,
  },
];

// C: Devait rester dans routes/films.ts (ce n'est pas une opération qui manipule/crée une ressource, c'est à dire un objet film)
const expectedKeys = [
  "title",
  "director",
  "duration",
  "budget",
  "description",
  "imageUrl",
];

// Read all films, filtered by minimum-duration if the query param exists
// C: aurait pu avoir cette signature :
// const readAll = (minimumDuration: number | undefined = undefined): Film[] => {..}
// Permet de ne pas avoir à vérifier si minimumDuration est défini
function readAllFilms(minDuration: number | undefined = undefined): Film[] {
  const films = parse(jsonDbPath, defaultFilms);
  return minDuration
    ? films.filter((film) => film.duration >= minDuration)
    : films;
  // C: OK mais solution plus simple :
  //    const films = parse(jsonDbPath, defaultFilms);
  //    return minimumDuration
  //            ? films.filter((film) => film.duration >= minimumDuration)
  //        : films;
}

function readOneFilm(id: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const film = films.find((film) => film.id === id);
  // C: On pouvait faire un return directement ici (pas besoin de vérifier si film est défini, car .find reverra de tt façon undefined si le film n'existe pas)

  if (!film) {
    return undefined;
  }

  return film;
}

// Create a new film
function createOneFilm(newFilm: NewFilm): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const existingFilm = films.find(
    (film) =>
      film.title.toLowerCase() === newFilm.title.toLowerCase() &&
      film.director.toLowerCase() === newFilm.director.toLowerCase()
  );

  if (existingFilm) {
    return undefined;
  }

  // C: OK mais une fonction nextId() pour générer l'id du film suivant aurait éviter la répétition
  const nextId =
    films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const createdFilm = {
    id: nextId,
    ...newFilm,
  };

  films.push(createdFilm);
  serialize(jsonDbPath, films);

  return createdFilm;
}

// Delete a film by id
function deleteOneFilm(filmId: number): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const index = films.findIndex((film) => film.id === filmId);

  if (index === -1) {
    return undefined;
  }

  const deletedElements = films.splice(index, 1); //C : Ou "const [film] = films.splice(index, 1);" (+ lisible)
  serialize(jsonDbPath, films);

  return deletedElements[0]; //C : Ou "return film" (si on utilise la ligne précédente, + lisible)
}

// Update on or multiple props of a film
function updateOneFilm(
  filmId: number,
  newFilm: Partial<NewFilm>
): Film | undefined {
  const films = parse(jsonDbPath, defaultFilms);

  const indexOfFilmToUpdate = films.findIndex((film) => film.id === filmId);

  if (indexOfFilmToUpdate < 0) {
    return undefined;
  }

  const updatedFilm = { ...films[indexOfFilmToUpdate], ...newFilm };
  films[indexOfFilmToUpdate] = updatedFilm;

  serialize(jsonDbPath, films);
  return updatedFilm;
}

// Update a film only if all properties are given or create it if it does not exist and the id is not existant
function updateOrCreateOneFilm(
  filmId: number,
  newFilm: NewFilm
): Film | undefined {
  if (readOneFilm(filmId)) {
    return updateOneFilm(filmId, newFilm);
  }
  return createOneFilm(newFilm);

  // C: Solution alternative :
  //    const films = parse(jsonDbPath, defaultFilms);
  //    const index = films.findIndex((film) => film.id === id);
  //    if (index === -1) {
  //        return createOne(updatedFilm);
  //    }
  //    const film = { ...films[index], ...updatedFilm };
  //    films[index] = film;
  //    serialize(jsonDbPath, films);
  //    return film;
}

// C: Une fonction nextId() aurait pu être utile pour éviter la répétition dans createOneFilm et updateOrCreateOneFilm
//      const nextId = () =>
//          parse(jsonDbPath, defaultFilms).reduce((maxId, film) => Math.max(maxId, film.id),0) + 1;

export {
  readAllFilms,
  readOneFilm,
  createOneFilm,
  deleteOneFilm,
  updateOneFilm,
  updateOrCreateOneFilm,
  expectedKeys, //C: Inutile de l'exporter, car elle devrait rester dans routes/films.ts
};
