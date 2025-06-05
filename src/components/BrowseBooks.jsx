import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BrowseBooks() {
  const books = useSelector((state) => state.books.books);
  const [filterBook, setFilterBook] = useState(books);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    setFilterBook(books);
  }, [books]);

  function handleChange(event) {
    setUserInput(event.target.value);
    const values = books.filter((item) => {
      return (
        item.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.author.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setFilterBook(values);
  }

  return (
    <div className="browse">
      <div className="booksCont">
        <h1>Books</h1>
        <div className="searchCont">
          <input
            onChange={handleChange}
            value={userInput}
            type="text"
            placeholder="Search by title or author."
          />
        </div>
        <div className="books">
          {filterBook.map((book) => (
            <div className="card" key={book.id}>
              <img className="image" src={book.image} alt="Image" />
              <h3 className="title">Title: {book.title}</h3>
              <p className="author">Author: {book.author}</p>
              <p className="category">Category: {book.category}</p>
              <p className="more">
                <Link to={`/browseBooks/book/${book.title}`}>View Details</Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseBooks;
