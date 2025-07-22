interface Text {
  id : string;
  content: string;
  level: string;    
  //C: Les valeurs autorisées auraient dû se trouver dans le type
    // level: "easy" | "medium" | "hard";
}

type NewText = Omit<Text, "id">;

export type { Text, NewText };
