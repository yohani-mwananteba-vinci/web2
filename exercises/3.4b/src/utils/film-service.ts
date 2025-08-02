import { AuthenticatedUser, Movie, NewMovie } from "../types";

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

const addMovie = async (
  movie: NewMovie,
  authenticatedUser: AuthenticatedUser
): Promise<Movie> => {
  try {
    const response = await fetch("/api/films", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authenticatedUser.token,
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

const deleteMovie = async (
  movie: Movie,
  authenticatedUser: AuthenticatedUser
): Promise<void> => {
  try {
    const response = await fetch(`/api/films/${movie.id}`, {
      method: "DELETE",
      headers: {
        Authorization: authenticatedUser.token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete movie : " + response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateMovie = async (
  movie: NewMovie, //C: Il fallait renvoyer un newMovie (sinon on envoie 2 fois le même objet => erreur + pas besoin de l'id ici comme on le récupère dans l'url)
  authenticatedUser: AuthenticatedUser
): Promise<Movie> => {
  try {
    const movieToEdit = { ...movie, id: undefined };
    const response = await fetch(`/api/films/${movieToEdit.id}`, {
      method: "PUT", //C: Il fallait qu'il soit de type PATCH
      headers: {
        "Content-Type": "application/json",
        Authorization: authenticatedUser.token,
      },
      body: JSON.stringify(movieToEdit),
    });
    if (!response.ok) {
      throw new Error("Failed to update movie : " + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchMovies, addMovie, deleteMovie, updateMovie };
