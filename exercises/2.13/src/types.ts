interface Joke {
  category: string;
  joke: string;
}

// Remarque: Code pouvant servir plus tard si on me demande de gérer les flags ou d'autres propriétés de l'API JokeAPI

// interface Flags {
//   nsfw: boolean;
//   religious: boolean;
//   political: boolean;
//   racist: boolean;
//   sexist: boolean;
//   explicit: boolean;
// }

// interface Joke {
//   error: boolean;
//   category: string;
//   type: string;
//   joke: string;
//   flags: Flags;
//   id: number;
//   safe: boolean;
//   lang: string;
// }

export type { Joke };
