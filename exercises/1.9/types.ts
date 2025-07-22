interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
}

type NewFilm = Omit<Film, "id">;

interface Text {
  id : string;
  content: string;
  level: string;
}

type NewText = Omit<Text, "id">;

export type { Film, NewFilm, Text, NewText };
