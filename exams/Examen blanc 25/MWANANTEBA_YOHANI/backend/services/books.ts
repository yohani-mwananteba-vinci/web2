import path from "node:path";

import { parse } from "../utils/json";
import { Book } from "../types";

const jsonDbPath = path.join(__dirname, "/../data/books.json");

const defaultBooks: Book[] = [
  {
    id: 1,
    title: "Le Petit Prince",
    author: "Antoine de Saint-Exupéry",
    dateCreation: 1943,
    urlCover:
      "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/a6/d8/1d/1956006/1507-1/tsp20250719073617/Le-Petit-Prince.jpg",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    dateCreation: 1949,
    urlCover: "https://m.media-amazon.com/images/I/71wANojhEKL.jpg",
  },
  {
    id: 3,
    title: "L'Étranger",
    author: "Albert Camus",
    dateCreation: 1942,
    urlCover:
      "https://cdn.club.be/product/9782070360024/front-medium-3436227337.jpg",
  },
  {
    id: 4,
    title: "Harry Potter à l'école des sorciers",
    author: "J.K. Rowling",
    dateCreation: 1997,
    urlCover:
      "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/ba/d8/1d/1956026/1507-1/tsp20250103100534/Harry-Potter-a-l-ecole-des-sorciers.jpg",
  },
  {
    id: 5,
    title: "Le Seigneur des Anneaux",
    author: "J.R.R. Tolkien",
    dateCreation: 1954,
    urlCover:
      "https://static.fnac-static.com/multimedia/PE/Images/FR/NR/41/27/19/1648449/1507-1/tsp20250325094345/Le-Seigneur-des-Anneaux-tome-1-La-Fraternite-de-l-Anneau.jpg",
  },
  {
    id: 6,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    dateCreation: 1953,
  },
];

// Read all books and filter then by bookId if provided
const readAll = (): Book[] => {
  const books = parse<Book>(jsonDbPath, defaultBooks);
  return books;
};

const readOne = (id: number): Book | undefined => {
  const books = parse(jsonDbPath, defaultBooks);
  return books.find((book) => book.id === id);
};

export { readAll, readOne };
