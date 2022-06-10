import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const booksData = useSelector((state) => state.bookreducer);
  return (
    <div>
      {booksData.map((eachBook) => (
        <Book
          author={eachBook.author}
          key={eachBook.id}
          id={eachBook.id}
          title={eachBook.title}
        />
      ))}
      <Form />
    </div>
  );
}

export default Books;
