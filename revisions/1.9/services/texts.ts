import path from "node:path";
import { Text, NewText } from "../types";
import { parse, serialize } from "../utils/json";
import { v4 as uuidv4 } from "uuid";

const jsonDbPath = path.join(__dirname, "/../data/texts.json");

const defaultTexts: Text[] = [
  {
    id: "1",
    content: "Le soleil brille dans le ciel bleu.",
    level: "easy",
  },
  {
    id: "2",
    content: "Les chats aiment se prélasser au soleil.",
    level: "easy",
  },
  {
    id: "3",
    content:
      "La biodiversité est essentielle pour l’équilibre des écosystèmes.",
    level: "medium",
  },
  {
    id: "4",
    content: "La théorie de la relativité a révolutionné la physique moderne.",
    level: "hard",
  },
  {
    id: "5",
    content:
      "Les volcans peuvent influencer le climat mondial par leurs éruptions.",
    level: "medium",
  },
];

const readAllTexts = (level: string | undefined): Text[] => {
  const texts = parse(jsonDbPath, defaultTexts);
  if (!level) {
    return texts;
  }

  const filteredtexts = texts.filter((text) => {
    return text.level === level;
  });
  return filteredtexts;

  // C: Solution + rapide (utiliser "?")
  // => level ? texts.filter((text) => text.level === level) : texts;
};

// C: Solution + rapide (utiliser "?")
const readOneText = (id: string): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);
  const text = texts.find((text) => text.id === id);
  if (!text) {
    return undefined;
  }
  return text;
};

const createOneText = (newText: NewText): Text => {
  const texts = parse(jsonDbPath, defaultTexts);

  //   C: Il fallait vérifier que le texte n'existait pas dj (mm id)

  const nextId = uuidv4();
  const createdText = {
    id: nextId,
    ...newText,
  };

  texts.push(createdText);
  serialize(jsonDbPath, texts);

  return createdText;
};

const deleteOneText = (textId: string): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);
  const index = texts.findIndex((text) => text.id === textId);
  if (index === -1) {
    return undefined;
  }

  const deletedElements = texts.splice(index, 1);
  serialize(jsonDbPath, texts);
  return deletedElements[0];
};

const updateOneText = (textId: string, newText: NewText): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);
  const text = texts.find((text) => text.id === textId);
  if (!text) {
    return undefined;
  }

  //   C: utilisation d'un spread opérator (en utilisant remplaçant par un )
  text.content = newText.content;
  text.level = newText.level;

  serialize(jsonDbPath, texts);
  return text;
};

export {
  readAllTexts,
  readOneText,
  createOneText,
  deleteOneText,
  updateOneText,
};
