interface Movie {
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieListContext {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  onMovieAdded: (newMovie: Movie) => void;
}

export type { Movie, MovieListContext };