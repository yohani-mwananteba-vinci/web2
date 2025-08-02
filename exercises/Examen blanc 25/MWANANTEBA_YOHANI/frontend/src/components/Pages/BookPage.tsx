import { useOutletContext, useMatch } from "react-router-dom";
import { BookContext } from "../../../types";
import PageTitle from "../PageTitle";

const BookPage = () => {
  const { books, authenticatedUser }: BookContext = useOutletContext();

  const match = useMatch("/books/:id");
  const bookId = Number(match?.params.id);
  if (isNaN(bookId)) return <p>book not found</p>;

  const bookFound = books.find((book) => book.id === bookId);

  if (authenticatedUser) {
    if (!bookFound) return <p>book not found</p>;
    console.log(bookFound.urlCover);
    return (
      <div className="book-page">
        <PageTitle title={bookFound.title} />
        <h2>{bookFound.author}</h2>
        <p>{bookFound.dateCreation}</p>
        <img
          src={
            bookFound.urlCover
              ? bookFound.urlCover
              : "../../src/assets/cover.jpg"
          }
          alt="Cover of the book"
        />
      </div>
    );
  }
  return <p>Can't access library if you are not logged in</p>;
};

export default BookPage;
