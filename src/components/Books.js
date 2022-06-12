import React from 'react';
import { useSelector } from 'react-redux';
import Book from './EachBookCard/Book';
import Form from './AddBookForm/Form';

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
          progress={eachBook.progress}
        />
      ))}
      <Form />
    </div>
  );
}

export default Books;
