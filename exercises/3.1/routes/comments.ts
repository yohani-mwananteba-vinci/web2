import { Router } from "express";

import { containsOnlyExpectedKeys } from "../utils/validate";

import { readAll, createOne, deleteOne } from "../services/comments";
import { readOne } from "../services/films";
import { authorize } from "../utils/auths";
import { AuthenticatedRequest } from "../types";

const router = Router();

const expectedKeys = ["filmId", "comment"];

// Read all comments, filtered by id
router.get("/", authorize, (req, res) => {
  const filmId = "film" in req.query ? Number(req.query["film"]) : undefined;

  if (filmId == undefined || isNaN(filmId) || filmId <= 0) {
    return res.sendStatus(400);
  }

  if (!readOne(filmId)) {
    return res.sendStatus(404);
  }

  const comments = readAll(filmId);
  // if (!Array.isArray(comments)) {
  //   return res.sendStatus(500);
  // }

  return res.send(comments);
});

// Create a new comment
router.post("/", authorize, (req: AuthenticatedRequest, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("comment" in body) ||
    !("filmId" in body) ||
    typeof body.comment !== "string" ||
    typeof body.filmId !== "number" ||
    !body.comment.trim() ||
    body.filmId <= 0
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.4 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }
  // End of challenge
  const existantFilm = readOne(body.filmId);

  if (!existantFilm) {
    return res.sendStatus(404);
  }

  const user = req.user?.username;

  const addedComment = createOne(user!, {
    filmId: body.filmId,
    comment: body.comment,
  });

  if (!addedComment) {
    return res.sendStatus(409);
  }

  return res.json(addedComment);
});

// Delete a comment by idFilm
router.delete("/:id", authorize, (req: AuthenticatedRequest, res) => {
  const idFilm = Number(req.params.id);

  if (isNaN(idFilm)) {
    return res.sendStatus(400);
  }

  const user = req.user?.username;

  const deletedComment = deleteOne(user!, idFilm);

  if (!deletedComment) {
    return res.sendStatus(404);
  }

  return res.send(deletedComment);
});

export default router;
