interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  urlImage?: string;
  description?: string;
  budget?: number;
}

export type { Film };
