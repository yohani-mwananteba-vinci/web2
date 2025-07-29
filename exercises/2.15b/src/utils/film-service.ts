import { Movie, NewMovie } from "../types";

const fetchMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch("/api/films");
    if (!response.ok) {
      throw new Error("Failed to fetch movies : " + response.statusText);
    }
    const data = await response.json();
    if (!data || !Array.isArray(data)) {
      throw new Error("Invalid data");
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addMovie = async (movie: NewMovie): Promise<Movie> => {
  try {
    const response = await fetch("/api/films", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    if (!response.ok) {
      throw new Error("Failed to add movie : " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// C: Le type de retour devait être void (mais OK)
const deleteMovie = async (movie: Movie): Promise<Movie> => {
  try {
    // Remarque: on met {} ce qu'on mettrait si on faisait un DELETE dans une API REST (juste l'id du film à supprimer pour DELETE)
    const response = await fetch(`/api/films/${movie.id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete movie : " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchMovies, addMovie, deleteMovie };
