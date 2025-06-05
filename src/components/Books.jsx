import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Books() {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      {books.map((book) => (
        <div className="card" key={book.id}>
          <img className="image" src={book.image} alt="Image" />
          <h3 className="title">Title: {book.title}</h3>
          <p className="author">Author: {book.author}</p>
          <p className="category">Category: {book.category}</p>
          <p className="more">
            <Link to={`/book/${book.title}`}>View Details</Link>
          </p>
        </div>
      ))}
    </>
  );
}

export default Books;