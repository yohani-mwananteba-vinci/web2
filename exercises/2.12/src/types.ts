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
  onMovieAdded: (newMovie: Movie) => void; //C: Il fallait que ce soit de type NewMovie pour être cohérent avec le formulaire d'ajout de film
}

// C: Il faut un type NewMovie pour les nouveaux films (plus évident pour les formulaires)

export type { Movie, MovieContext };
