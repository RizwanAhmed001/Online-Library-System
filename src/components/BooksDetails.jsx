import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BooksDetails() {
  const { name } = useParams();
  const books = useSelector((state) => state.books.books);

  const detailedBook = books.filter((val) => val.title === name);

  return (
    <>
      {detailedBook.map((item, index) => (
        <div className="cardNew" key={index}>
          <img className="imageNew" src={item.image} alt="Image" />
          <h3 className="titleNew">Title: {item.title}</h3>
          <p className="authorNew">Author: {item.author}</p>
          <p className="categoryNew">Category: {item.category}</p>
          <p className="descriptionNew">Description: {item.description}</p>
          <p className="ratingNew">Rating: {item.rating}</p>
          <button className="btn">
            <Link to="/browseBooks" className="btn-link">
              Browse Books
            </Link>
          </button>
        </div>
      ))}
    </>
  );
}

export default BooksDetails;
