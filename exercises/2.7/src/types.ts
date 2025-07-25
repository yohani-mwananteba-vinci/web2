interface Film {
  id: number;       //C: Id inutile, le titre suffit pour identifier un film
  title: string;
  director: string;
  duration: number;
  urlImage?: string;
  description?: string;
  budget?: number;
}

export type { Film };
