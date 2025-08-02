import { useOutletContext } from "react-router-dom";
import BookListView from "../BookListView";
import PageTitle from "../PageTitle";
import { BookContext } from "../../../types";

const LibraryPage = () => {
  const { books, handleShowBookPageRequest }: BookContext = useOutletContext();
  const { authenticatedUser }: BookContext = useOutletContext();

  if (authenticatedUser) {
    return (
      <div>
        <PageTitle title="Library" />

        <BookListView
          books={books}
          handleShowBookPageRequest={handleShowBookPageRequest}
        />

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

  return (
    <div>
      <p>Can't access library if you are not logged in</p>
    </div>
  );
};

export default LibraryPage;
