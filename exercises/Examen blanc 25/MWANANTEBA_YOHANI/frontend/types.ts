interface Book {
  id: number;
  title: string;
  author: string;
  dateCreation: number;
  urlCover?: string;
}

interface BookContext {
  books: Book[];
  loginUser: (user: User) => Promise<void>;
  clearUser: () => void;
  handleShowBookPageRequest: (book: Book) => void;
  authenticatedUser: MaybeAuthenticatedUser;
}

interface User {
  username: string;
  password: string;
}

interface AuthenticatedUser {
  username: string;
  token: string;
}

type MaybeAuthenticatedUser = AuthenticatedUser | undefined;

export type {
  Book,
  User,
  AuthenticatedUser,
  MaybeAuthenticatedUser,
  BookContext,
};
