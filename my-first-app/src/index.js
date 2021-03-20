import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg',
    title: `It's Not Easy Being a Bunny (Beginner Books(R))`,
    author: 'Marilyn Sadler',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71QuWEIWHlL._AC_UL200_SR200,200_.jpg',
    title: `Dog Man: Mothering Heights`,
    author: 'Dav Pilkey',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81e53xsxj8L._AC_UL200_SR200,200_.jpg',
    title: `How to Do the Work: Recognize Your Patterns, Heal from Your Past, and Create Your Self`,
    author: 'Dr. Nicole LePera',
  },
];

function BookList() {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  // object destruction
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
