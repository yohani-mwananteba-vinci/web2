import { Router } from "express";

import { containsOnlyExpectedKeys } from "../utils/validate";

import { readAll, createOne, deleteOne } from "../services/comments";
import { readOne } from "../services/films";
import { authorize } from "../utils/auths";
import { AuthenticatedRequest } from "../types";

const router = Router();

const expectedKeys = ["filmId", "comment"];

// Read all comments, filtered by id
// C: filmId n'est pas obligatoire, mais si il est présent, il doit être un nombre positif
router.get("/", authorize, (req, res) => {
  //C : authorize inutile ici, car on ne peut pas lire les commentaires sans être authentifié
  const filmId = "film" in req.query ? Number(req.query["film"]) : undefined;

  // C: filmId est un paramètre optionnel, mais s'il est présent, il doit être un nombre positif
  //  => if (filmId !== undefined && (isNaN(filmId) || filmId <= 0)) {...}
  if (filmId === undefined || isNaN(filmId) || filmId <= 0) {
    return res.sendStatus(400);
  }

  // C: Inutile, il peut être undefined
  if (!readOne(filmId)) {
    return res.sendStatus(404);
  }

  // C: Il aurait fallu l'appeller filtreredComments
  const comments = readAll(filmId);

  return res.send(comments);
});

// Create a new comment
router.post("/", authorize, (req: AuthenticatedRequest, res) => {
  // C: !!! Pas de "req: AuthenticatedRequest" dans la signature pour récupérer le token !!! (Voir plus bas)
  const body: unknown = req.body;

  // C: Récupération du token et vérfication DANS le body (req.user pour récupérer l'utilisateur authentifié) !
  if (
    !body ||
    typeof body !== "object" ||
    !("comment" in body) ||
    !("filmId" in body) ||
    typeof body.comment !== "string" ||
    typeof body.filmId !== "number" ||
    !body.comment.trim() ||
    body.filmId <= 0
    // C: Condition manquante :
    // - !Number.isInteger(body.filmId) => pour vérifier que filmId est un nombre entier positif
    // - !("user" in req) => pour vérifier que req.user existe
    // - typeof req.user !== "object" => pour vérifier que req.user est un objet
    // - !req.user => pour vérifier que req.user n'est pas undefined
    // - !("username" in req.user) => pour vérifier que req.user a une propriété username
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

  // C: Solution plus efficace pour gérer les codes d'erreur (Voir en dessous pour la function corrigée)
  // 1) envoie d'un new Error du service => ex: new Error("Conflict")
  // 2) try-catch:
  // 2.1) On lance la fonction du service dans le try (createOne) + renvoie de la réponse res.send(addedComment);
  // 2.2) Si une erreur est lancée, on la catch et on renvoie le code d'erreur approprié
  // 2.2.1) if (!(error instanceof Error)) { return res.sendStatus(500); } => pour vérifier que l'erreur est bien une instance de Error
  // 2.2.2) if (error.message === "Conflict") { return res.sendStatus(409); } => pour vérifier le message de l'erreur 409
  // 2.2.3) if (error.message === "Not found") { return res.sendStatus(404); } => pour vérifier le message de l'erreur 404
  // 2.2.4) return res.sendStatus(500); => pour renvoyer une erreur 500 si l'erreur n'est pas gérée
  // Exemple :
  //   try {
  //   createOne(newComment);
  //   return res.send(newComment);
  // } catch (error) {
  //   if (!(error instanceof Error)) {
  //     return res.sendStatus(500);
  //   }

  //   if (error.message === "Not found") {
  //     return res.sendStatus(404);
  //   }

  //   if (error.message === "Conflict") {
  //     return res.sendStatus(409);
  //   }

  //   return res.sendStatus(500);
  // }

  return res.json(addedComment);
});

// Delete a comment by idFilm
// C: - Mauvaise route => films/:idFilm (voir README.md)
//     - req ne doit pas être de type AuthenticatedRequest (récupération du token dans le body)
router.delete("/:id", authorize, (req: AuthenticatedRequest, res) => {
  const idFilm = Number(req.params.id);

  // C: Vérification que idFilm + user du token sont valides
  if (
    isNaN(idFilm)
    // C: Conditions manquantes :
    // - filmId <= 0 => pour vérifier que idFilm est un nombre entier positif
    // - !("user" in req) => pour vérifier que req.user existe
    // - typeof req.user !== "object" => pour vérifier que req.user est un objet
    // - !req.user => pour vérifier que req.user n'est pas undefined
    // - !("username" in req.user) => pour vérifier que req.user a une propriété username
    // - typeof req.user.username !== "string" => pour vérifier que req.user.username est une chaîne de caractères
  ) {
    return res.sendStatus(400);
  }

  const user = req.user?.username;

  const deletedComment = deleteOne(user!, idFilm);

  // C: Il fallait faire un try-catch pour gérer les erreurs du service deleteOne (voir plus bas et la methode post plus haut pour plus d'infos)
  if (!deletedComment) {
    return res.sendStatus(404);
  }

  return res.send(deletedComment);

  // Version corrigée avec try-catch :
  //   try {
  //   const deletedComment = deleteOne(filmId, username);
  //   return res.send(deletedComment);
  // } catch (error) {
  //   if (!(error instanceof Error)) {
  //     return res.sendStatus(500);
  //   }

  //   if (error.message === "Not found") {
  //     return res.sendStatus(404);
  //   }

  //   return res.sendStatus(500);
  // }
});

export default router;
