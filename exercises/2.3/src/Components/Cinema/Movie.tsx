// C: Lorsque l'on emploie un tableau d'une interface, on va en faire un type 
//  => Il fallait créer un fichier types.ts et y mettre l'interface Movie (qui devient donc un type)

interface Movie {
  title: string;
  director: string;
}

export default Movie;
