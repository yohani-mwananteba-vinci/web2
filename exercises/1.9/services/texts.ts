import path from "node:path";

import { Text, NewText } from "../types";

import { serialize, parse } from "../utils/json";

import { v4 as uuidv4 } from "uuid";

const jsonDbPath = path.join(__dirname, "/../data/texts.json");

// C: Il fallait laisser les valeurs autorisées dans types.ts er dans routes/texts.ts
const possibleLevels = ["easy", "medium", "hard"];  
// REMARQUE: FAIRE ATTENTION AUX ESPCACES !!! (sinon risque d'erreurs entre les != valeurs à la comparaison)

const defaultTexts: Text[] = [
  {
    id: "1",
    content: "Le soleil brille aujourd'hui.",
    level: "easy",
  },
  {
    id: "2",
    content: "La technologie évolue rapidement dans le monde moderne.",
    level: "medium",
  },
  {
    id: "3",
    content: "L'histoire de France est riche et complexe.",
    level: "medium",
  },
  {
    id: "4",
    content:
      "La physique quantique remet en question notre compréhension de la réalité.",
    level: "hard",
  },
  {
    id: "5",
    content: "Les océans couvrent plus de 70% de la surface de la Terre.",
    level: "easy",
  },
];

// C: Gérer le cas où le lvl est incorrect est inutile ici, il peut être géré comme undefined (pas de undefined dans la signature de la fonction)
const readAll = (
  textlevel: string | undefined = undefined
): Text[] | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const lvlExistant = isLevel(textlevel);

  // Cas où il n'y a pas de params     // C: Devait aussi gérer le cas où le level n'existe pas parmi les valeurs autorisées
  if (lvlExistant === undefined) return texts;

  //   Cas où il y a un lvl qui existe
  if (lvlExistant === true)
    return texts.filter(
      (text) => text.level.toLowerCase() === textlevel?.toLowerCase()
    );

    //  C: Cas Inutile
    // Cas où le lvl n'existe pas
  return undefined;

  // C: Solution + simple:
  //   return level ? texts.filter((text) => text.level === level) : texts;
};

const readOne = (id: string): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);
  return texts.find((text) => text.id === id);
};

const createOne = (newText: NewText): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  // C: Il fallait surtout vérifier que le content était unique
    // const matchingText = texts.find(
    //   (text) => text.content.toLowerCase() === newText.content.toLowerCase()
    // );

    // if (matchingText) {
    //   return undefined;
    // }
    
  if (!isLevel(newText.level)) {
    return undefined;
  }

  const newId: string = generatedId();      //C: Inutile, on peut le générer directement dans l'objet text

  const text = { id: newId, ...newText };   //C: id: uuidv4() suffisait ici, car on le génère avant

  text.level = text.level.toLowerCase();    //C: Pas besoin de changer le level

  texts.push(text);
  serialize(jsonDbPath, texts);

  return text;
};

const deleteOne = (id: string): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return undefined;
  }

  const [text] = texts.splice(index, 1);
  serialize(jsonDbPath, texts);

  return text;
};

const updateOne = (id: string, updatedText: NewText): Text | undefined => {
  const texts = parse(jsonDbPath, defaultTexts);

  const index = texts.findIndex((text) => text.id === id);

  if (index === -1) {
    return undefined;
  }

  if (!isLevel(updatedText.level)) return undefined;    // C: Pas besoin de vérifier le level

  const text = { ...texts[index], ...updatedText }; 
  text.level = text.level.toLowerCase();               // C: Pas besoin de changer la casse du level

  texts[index] = text;
  serialize(jsonDbPath, texts);

  return text;
};

function isLevel(txtLevel: string | undefined): boolean | undefined {
  if (txtLevel === undefined) return undefined;

  if (
    !possibleLevels.find(
      (lvl) => txtLevel.toLowerCase().trim() === lvl.toLowerCase().trim()
    )
  ) {
    return false;
  }

  return true;
}

// C: Pas nécessaire, uuidv4() comme paramètre de la création de l'objet NewText est suffisant (Voir createOne)
const generatedId = () => uuidv4();

export { readAll, readOne, createOne, deleteOne, updateOne };
