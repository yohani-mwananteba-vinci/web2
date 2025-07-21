import { Router } from "express";

import { Film, NewFilm } from "../types";

const router = Router();

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
// Read all films

// router.get("/", (_req, res) => {
//   return res.json(defaultFilms);
// });

// Read all filtred
router.get("/", (req, res) => {
  // Check if there is a param minimum-duration in the url of the request
  if (!req.query["minimum-duration"]) {
    return res.json(defaultFilms);
  }

  // Convert the value of the param minimum-duration to Number
  const minDuration = Number(req.query["minimum-duration"]);

  // Check if minDuration >= 0
  if (minDuration >= 0) return res.json("Wrong minimum duration");

  // Create a filtred tab with film with a duration >= minDuration
  const filtredFilms = defaultFilms.filter(
    (film) => film.duration >= minDuration
  );

  return res.json(filtredFilms);
});

// READ ONE
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }
  return res.json(film);
});

// CREATE ONE (POST)
router.post("/", (req, res) => {
  // Retrieve the body of the request
  const body: unknown = req.body;

  // Check the type for body and all body's properties
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration < 0 ||
    // Optionnals properties
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget < 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  // Create a newFilm
  const { title, director, duration, budget, description, imageUrl } =
    body as NewFilm;

  // Find the id of the film to add
  const nextId =
    defaultFilms.reduce(
      (maxId, film) => (film.id > maxId ? film.id : maxId),
      0
    ) + 1;

  // Create the film to add
  const newFilm: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl,
  };

  // Add the new Film to the tab
  defaultFilms.push(newFilm);

  // Return the new Film
  return res.json(newFilm);
});

export default router;
