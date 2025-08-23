import { Router } from "express";

import { NewText } from "../types";
import {
  readAllTexts,
  readOneText,
  createOneText,
  deleteOneText,
  updateOneText,
} from "../services/texts";

const router = Router();
const expectedLevel = ["easy", "medium", "hard"];

router.get("/", (req, res) => {
  const level = req.query.level;
  if (level && typeof level !== "string") return res.sendStatus(400);
  //   C: Il fallait renvoyer 400 si level était pas un de expectedLevel

  const texts = readAllTexts(level);
  return res.json(texts);
});

router.get("/:id", (req, res) => {
  // C: Il fallait renvoyer 404 si l'id n'était pas de type string
  const id = req.params.id;
  const text = readOneText(id);
  if (!text) {
    return res.sendStatus(404);
  }
  return res.json(text);
});

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
    !body.level.trim() ||
    !expectedLevel.includes(body.level.toLowerCase())
  ) {
    return res.sendStatus(400);
  }

  body.level = body.level.toLowerCase();
  const { content, level } = body as NewText;

  const newText = createOneText({ content, level });
  //   C: Il fallait renvoyer un code 409 si le texte existait dj (mm id)
  return res.json(newText);
});

router.delete("/:id", (req, res) => {
  // C: Il fallait renvoyer 400 si l'id n'était pas de type string
  const id = req.params.id;
  const deletedText = deleteOneText(id);
  if (!deletedText) {
    return res.sendStatus(404);
  }
  return res.json(deletedText);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  // C: Il fallait renvoyer 400 si l'id n'était pas de type string

  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("content" in body) ||
    !("level" in body) ||
    typeof body.content !== "string" ||
    typeof body.level !== "string" ||
    !body.content.trim() ||
    !body.level.trim() ||
    !expectedLevel.includes(body.level.toLowerCase())
  ) {
    return res.sendStatus(400);
  }

  const { content, level } = body as NewText;

  const updatedText = updateOneText(id, { content, level });

  if (!updatedText) {
    return res.sendStatus(404);
  }

  return res.json(updatedText);
});

export default router;
