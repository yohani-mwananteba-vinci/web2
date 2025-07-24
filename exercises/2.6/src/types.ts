interface Movie {
  title: string;
  director: string;
  description: string;
}

interface MovieItem {
  movie: Movie;
}

export type { Movie, MovieItem };
