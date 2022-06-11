import React from 'react';
import { useSelector } from 'react-redux';
import Book from './EachBookCard/Book';
import Form from './Form';

function Books() {
  const booksData = useSelector((state) => state.bookreducer);
  console.log(booksData);
  return (
    <div>
      {booksData.map((eachBook) => (
        <Book
          author={eachBook.author}
          key={eachBook.id}
          id={eachBook.id}
          title={eachBook.title}
          category={eachBook.category}
        />
      ))}
      <Form />
    </div>
  );
}

export default Books;
