import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const addEachBook = (event) => {
    event.preventDefault();
    dispatch(addBook({ id: uuidv4(), title, author }));
  };
  return (
    <>
      <h4>Add A form</h4>
      <form onSubmit={addEachBook}>
        <input type="text" name="" id="" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="" id="" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default Form;
