import { useState } from 'react';
import uuid from 'react-uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators.js';
import './BookForm.css';
const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    //dispatch action
    e.preventDefault();
    if (title && author) {
      //dispatch
      const book = {
        title: title,
        author: author,
        id: uuid(),
      };
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
