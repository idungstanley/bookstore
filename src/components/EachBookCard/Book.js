import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../../redux/books/books';
import BookProgress from './Progress';
import './card.css';
import Chapter from './Chapter';

function Book({
  title, author, id, category, progress,
}) {
  const dispatch = useDispatch();
  const removeBook = () => {
    dispatch(deleteBook(id));
  };
  return (
    <section className="card">
      <article>
        <span className="cartegory-select">{category}</span>
        <h1 className="heading-one">{title}</h1>
        <p className="author-card">{author}</p>
        <div className="button">
          <button type="submit" className="comment no-outline">
            Comments
          </button>
          <span>|</span>
          <button type="submit" className="remove no-outline" onClick={removeBook}>
            Remove
          </button>
          <span>|</span>
          <button type="submit" className="edit no-outline">
            Edit
          </button>
        </div>
      </article>
      <BookProgress progress={progress} />
      <Chapter />
    </section>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
export default Book;
