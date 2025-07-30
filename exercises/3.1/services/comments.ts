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

const readAll = (filmId: number): Comment[] => {
  const comments = parse(jsonDbPath, defaultComments);
  return comments.filter((comment) => comment.filmId === filmId);
};

// const getComment = (user: string, filmId: number): Comment | undefined => {
//   const comments = parse(jsonDbPath, defaultComments);
//   return comments.find(
//     (comment) => comment.filmId === filmId && comment.username === user
//   );
// };

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
  }

  const comment = { username: user, ...newComment };

  comments.push(comment);
  serialize(jsonDbPath, comments);

  return comment;
};

const deleteOne = (user: string, filmId: number): Comment | undefined => {
  const comments = parse(jsonDbPath, defaultComments);

  const index = comments.findIndex(
    (comment) => comment.filmId === filmId && comment.username === user
  );

  if (index === -1) {
    return undefined;
  }

  const [comment] = comments.splice(index, 1);
  serialize(jsonDbPath, comments);

  return comment;
};

export { readAll, createOne, deleteOne };
