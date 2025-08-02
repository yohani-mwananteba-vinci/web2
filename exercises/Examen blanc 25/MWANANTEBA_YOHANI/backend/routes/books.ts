import { Router } from "express";

import { readAll, readOne } from "../services/books";

// import { Book } from "../types";
import { authorize } from "../utils/auths";

const router = Router();

// Read all books, filtered by bookId if the query param exists
router.get("/", authorize, (_req, res) => {
  const books = readAll();
  return res.send(books);
});

// Read the book identified by an id in the menu
router.get("/:id", authorize, (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id) || typeof id !== "number") return res.sendStatus(400);
  const book = readOne(id);
  if (!book) return res.sendStatus(404);
  return res.json(book);
});

export default router;
