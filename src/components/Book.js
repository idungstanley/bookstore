import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

function Book({
  title, author, id,
}) {
  const dispatch = useDispatch();
  const removeBook = () => {
    dispatch(deleteBook(id));
  };
  return (
    <li>
      <h1>{title}</h1>
      <p>{author}</p>
      <div className="button">
        <button type="submit" className="comment">Comments</button>
        <button type="submit" className="remove" onClick={removeBook}>Remove</button>
        <button type="submit" className="edit">Edit</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
