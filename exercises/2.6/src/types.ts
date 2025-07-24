interface Movie {
  title: string;
  director: string;
  description: string;  //C: Devrait être optionnel
}

// Remarque: Il n'y a pas besoin de type MovieItem, car c'est un composant, pas une entité de données.

export type { Movie };
