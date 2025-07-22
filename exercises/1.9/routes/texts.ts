import { Router } from "express";

import { NewText } from "../types";

import { containsOnlyExpectedKeys } from "../utils/validate";

import {
  createOne,
  deleteOne,
  readAll,
  readOne,
  updateOne,
} from "../services/texts";

const router = Router();

const expectedKeys = ["content", "level"];

// C: Il fallait mettre le tab expetectedLevels ici (pas dans texts.ts)

// Read all texts, filtered by level if the query param exists
router.get("/", (req, res) => {
  const textLevel = "level" in req.query ? req.query["level"] : undefined;

  if (textLevel !== undefined && typeof textLevel !== "string") {
    return res.sendStatus(400);
  }

// C: OK, solution alternative:
//   const level = "level" in req.query && typeof req.query["level"] === "string" ? req.query["level"]: undefined;
//   if (level !== undefined && !expectedLevels.includes(level)) {
//     return res.sendStatus(400);
//   }

  const filteredTexts = readAll(textLevel);
  
  // C: Inutile ici car si lvl introuvable, readAll retourne undefined
  if (!filteredTexts) {
    return res.sendStatus(404);
  }

  return res.send(filteredTexts);
});

// Read a text by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.sendStatus(400);
  }

    // C: Solution alternative:
    // if (typeof id !== "string") {
    //   return res.sendStatus(400);

  const text = readOne(id);

  if (text === undefined) {
    return res.sendStatus(404);
  }

  return res.send(text);
});

// Create a new text
router.post("/", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim()
    // C: Il fallait vérifier que le level est parmi les valeurs autorisées
    // || !expectedLevels.includes(body.level)
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.4 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }
  // End of challenge

  const newText = body as NewText;

  const addedText = createOne(newText);

  if (!addedText) {
    return res.sendStatus(400);
  }

  return res.json(addedText);
});

// Delete a text by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.sendStatus(400);
  }

    // C: Solution alternative:
    // if (typeof id !== "string") {
    //   return res.sendStatus(400);

  const deletedText = deleteOne(id);

  if (!deletedText) {
    return res.sendStatus(404);
  }

  return res.send(deletedText);
});

// Update a text only if all properties are given or create it if it does not exist and the id is not existant
router.put("/:id", (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim()
    // C: Il fallait vérifier que le level est parmi les valeurs autorisées
    // || !expectedLevels.includes(body.level)
  ) {
    return res.sendStatus(400);
  }

  // Challenge of ex1.6 : To be complete, we should check that the keys of the body object are only the ones we expect
  if (!containsOnlyExpectedKeys(body, expectedKeys)) {
    return res.sendStatus(400);
  }

  const id = req.params.id;

  if (!id) {
    return res.sendStatus(400);
  }

    // C: Solution alternative:
    // if (typeof id !== "string") {
    //   return res.sendStatus(400);

  const updatedText = updateOne(id, body as NewText);

  if (!updatedText) {
    return res.sendStatus(404); // Text already exists
  }

  return res.send(updatedText);
});

export default router;
