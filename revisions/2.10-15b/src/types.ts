interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
  imageUrl?: string;
  description?: string;
  budget?: number;
}

type NewMovie = Omit<Movie, "id">;

// C: Inutile de rajouter un type CinemaMovie, on pouvait garder les propriétés manquantes dans 

interface MovieContext {
  movies: Movie[];
  //C: setMovies n'est pas utilisé en dehors de App.tsx (inutile de le mettre dans le context)
  // setMovies: (movies: Movie[]) => void;
  onMovieAdded: (newMovie: NewMovie) => void;
}

export type { Movie, NewMovie, MovieContext };
