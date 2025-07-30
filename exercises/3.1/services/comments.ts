import path from "node:path";

import { Comment, NewComment } from "../types";

import { serialize, parse } from "../utils/json";

const jsonDbPath = path.join(__dirname, "/../data/comments.json");

const defaultComments: Comment[] = [
  {
    username: "admin",
    filmId: 1,
    comment: "Un film Marvel très divertissant !",
  },
  {
    username: "manager",
    filmId: 1,
    comment: "Film sympa !",
  },
  {
    username: "admin",
    filmId: 2,
    comment: "Un classique de la science-fiction.",
  },
  {
    username: "manager",
    filmId: 3,
    comment: "Un animé japonais original et touchant.",
  },
  {
    username: "admin",
    filmId: 4,
    comment: "Une comédie dramatique familiale réussie.",
  },
  {
    username: "manager",
    filmId: 5,
    comment: "Une histoire d'amour futuriste émouvante.",
  },
];

// C: Pouvait renvoyer un tableau vide si le Comment n'existe pas
const readAll = (filmId: number): Comment[] => {
  const comments = parse(jsonDbPath, defaultComments);  // C: on n'est pas obliger de définir defaultComments => parse<Comment>(jsonDbPath);
  return comments.filter((comment) => comment.filmId === filmId);
};

// C: Version corrigée
// const readAll = (filmId: number | undefined = undefined): Comment[] => {
//   const comments = parse<Comment>(jsonDbPath);

//   return filmId
//     ? comments.filter((comment) => comment.filmId === filmId)
//     : comments;
// };

// C: 
// - NewComment inutile, on peut directement utiliser Comment
// - Elle peut avoir comme type de retour void
const createOne = (
  user: string,
  newComment: NewComment  
): Comment | undefined => {
  const comments = parse(jsonDbPath, defaultComments);

  const existantComment = comments.find(
    (comment) =>
      comment.username === user && comment.filmId === newComment.filmId
  );

  
  if (existantComment) {
    return undefined;
    // C: On peut aussi lancer une erreur pour gérer le code d'erreur 409 (Voir la function post de routes/comments.ts pour plus de détails)
    // throw new Error("Conflict"); 
  }

  const comment = { username: user, ...newComment };

  comments.push(comment);
  serialize(jsonDbPath, comments);

  return comment; // Inutile car elle a comme type de retour void
};

// C: Pas de undefined dans le type de retour, car on ne peut pas supprimer un Comment qui n'existe pas (on renvoie une erreur 404 dans ce cas)
const deleteOne = (user: string, filmId: number): Comment | undefined => {
  const comments = parse(jsonDbPath, defaultComments);

  const index = comments.findIndex(
    (comment) => comment.filmId === filmId && comment.username === user
  );

  if (index === -1) {
    return undefined; //C: On renvoie une new Error("Not found") pour gérer le code d'erreur 404
  }

  const [comment] = comments.splice(index, 1);
  serialize(jsonDbPath, comments);

  return comment;
};

export { readAll, createOne, deleteOne };
