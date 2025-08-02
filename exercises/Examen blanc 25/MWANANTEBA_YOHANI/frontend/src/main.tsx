import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Pages/HomePage.tsx";
import LibraryPage from "./components/Pages/LibraryPage.tsx";
import BookPage from "./components/Pages/BookPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <LibraryPage />,
      },
      {
        path: "books/:id",
        element: <BookPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
