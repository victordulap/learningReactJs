import React from 'react';
import ReactDOM from 'react-dom';

// components
// default export in ./Book
// we can change "Book" name, as it is a default export
import Book from './Book';

// CSS
import './index.css';

// setup vars
// named export in ./books
// we must use {} and the exact name exported from the file
import { books } from './books';

function BookList() {
  return (
    <section className="book-list">
      {books.map((book) => {
        // the names need to match
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));
