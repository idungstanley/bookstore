import React from 'react';
import PropTypes from 'prop-types';

function Book({ head, title, name }) {
  return (
    <li>
      <p>{head}</p>
      <h1>{title}</h1>
      <p>{name}</p>
      <div className="button">
        <button type="submit" className="comment">Comments</button>
        <button type="submit" className="remove">Remove</button>
        <button type="submit" className="edit">Edit</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Book;
