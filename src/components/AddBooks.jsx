import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../store/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    image: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.description ||
      !formData.rating ||
      !formData.image
    ) {
      alert('Please fill all fields.');
      return;
    }

    const newBook = {
      id: books.length ? books[books.length - 1].id + 1 : 1,
      title: formData.title,
      author: formData.author,
      category: formData.category,
      description: formData.description,
      rating: parseFloat(formData.rating),
      image: formData.image,
    };

    dispatch(addBook(newBook));
    alert('Book added successfully!');
    navigate('/browseBooks');
  }

  return (
    <div className="addBookContainer">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="addBookForm">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Fiction)"
          value={formData.category}
          onChange={handleChange}
        />
        <textarea
        className='des'
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          step="0.1"
          min="0"
          max="5"
          name="rating"
          placeholder="Rating (0 - 5)"
          value={formData.rating}
          onChange={handleChange}
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit" className='addBtn'>Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
