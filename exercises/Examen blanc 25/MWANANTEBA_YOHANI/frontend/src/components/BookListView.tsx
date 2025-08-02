
import { Book } from "../../types";
import BookCard from "./BookCard";
import "./BookListView.css";

interface BookListViewProps {
  books: Book[];
  handleShowBookPageRequest?: (book: Book) => void;
}

const BookListView = ({
  books,
  handleShowBookPageRequest,
}: BookListViewProps) => {
  return (
    <div>
      <ul className="book-list-view">
        {books.map((book) => (
          <BookCard
            key={book.title}
            book={book}
            handleShowBookPageRequest={handleShowBookPageRequest}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookListView;
