import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const allCategories = [
    'Action and Adventure',
    'Classics',
    'Comic Book or Graphic Novel',
    'Detective and Mystery',
    'Fantasy',
    'Historical Fiction',
    'Horror',
    'Literary Fiction',
  ];

  const dispatch = useDispatch();
  const addEachBook = (event) => {
    event.preventDefault();
    dispatch(addBook({
      id: uuidv4(), title, author, category,
    }));
  };

  return (
    <>
      <h4 className="form-heading">Add A form</h4>
      <form onSubmit={addEachBook}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <select name="cars" id="cars" onChange={(e) => setCategory(e.target.value)}>
          <option defaultValue="Category">Select Category</option>
          {allCategories.map((perCategory) => (
            <option key={perCategory} value={perCategory}>{perCategory}</option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}

export default Form;
