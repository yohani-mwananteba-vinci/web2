import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

import { fetchBooks } from "../utils/book-service";

import {
  clearAuthenticatedUser,
  getAuthenticatedUser,
  storeAuthenticatedUser,
} from "../utils/session";

import {
  Book,
  MaybeAuthenticatedUser,
  User,
  AuthenticatedUser,
  BookContext,
} from "../../types";

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const [authenticatedUser, setAuthenticatedUser] =
    useState<MaybeAuthenticatedUser>(getAuthenticatedUser());
  const navigate = useNavigate();

  const initBooks = async () => {
    try {
      console.log(authenticatedUser);
      if (!authenticatedUser) {
        throw new Error("User is not authenticated");
      }
      const books = await fetchBooks(authenticatedUser);
      setBooks(books);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const authenticatedUser = getAuthenticatedUser();
    if (authenticatedUser) {
      setAuthenticatedUser(authenticatedUser);
    }
    initBooks();
  }, []);

  const loginUser = async (user: User) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("/api/auths/login", options);

      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );

      const authenticatedUser: AuthenticatedUser = await response.json();
      console.log("authenticatedUser: ", authenticatedUser);

      setAuthenticatedUser(authenticatedUser);
      storeAuthenticatedUser(authenticatedUser);
    } catch (err) {
      console.error("loginUser::error: ", err);
      throw err;
    }
  };

  const clearUser = () => {
    clearAuthenticatedUser();
    setAuthenticatedUser(undefined);
  };

  const handleShowBookPageRequest = (book: Book) => {
    navigate(`/books/${book.id}`);
  };

  const bookContext: BookContext = {
    books,
    loginUser,
    authenticatedUser,
    handleShowBookPageRequest,
    clearUser,
  };

  return (
    <div>
      <Header>
        <NavBar authenticatedUser={authenticatedUser} />
      </Header>

      <main className="page-content">
        <Outlet context={bookContext} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
