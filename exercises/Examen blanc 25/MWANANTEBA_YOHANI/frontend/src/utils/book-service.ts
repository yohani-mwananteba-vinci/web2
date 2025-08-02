import { AuthenticatedUser, Book } from "../../types";

const fetchBooks = async (
  authenticatedUser: AuthenticatedUser
): Promise<Book[]> => {
  try {
    const response = await fetch("/api/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authenticatedUser.token,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch books : " + response.statusText);
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

export { fetchBooks };
