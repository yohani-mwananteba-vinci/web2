interface Movie {
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieListContext {                // C: "MovieContext" était plus approprié
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;     //C: Ok mais pas nécessaire de le mettre ici ()
  onMovieAdded: (newMovie: Movie) => void;
}

export type { Movie, MovieListContext };