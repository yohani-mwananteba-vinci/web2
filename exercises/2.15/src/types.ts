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
  onMovieAdded: (newMovie: NewMovie) => Promise<void>;    //C: Il n'est pas obligé d'être Promise<void> mais c'est plus explicite
}

type NewMovie = Omit<Movie, "id">;

export type { Movie, MovieContext, NewMovie };
