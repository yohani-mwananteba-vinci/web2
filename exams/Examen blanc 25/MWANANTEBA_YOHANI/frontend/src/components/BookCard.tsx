import { Book } from "../../types";
import "./BookCard.css";

interface BookCardProps {
  book: Book;
  handleShowBookPageRequest?: (book: Book) => void;
}

const BookCard = ({ book, handleShowBookPageRequest }: BookCardProps) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{book.title}</h3>
        {handleShowBookPageRequest && (
          <button onClick={() => handleShowBookPageRequest(book)}>
            Voir plus de détails
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
