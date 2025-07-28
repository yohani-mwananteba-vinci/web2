interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieContext {
  movies: Movie[];
  onMovieAdded: (newMovie: NewMovie) => void;
  onMovieToDelete: (movieToDelete: Movie) => Promise<void>; //C: Ok mais aurait dû être de type void tt court
}

type NewMovie = Omit<Movie, "id">;

export type { Movie, MovieContext, NewMovie };
