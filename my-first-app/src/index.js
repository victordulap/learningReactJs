import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup vars
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg',
  title: `It's Not Easy Being a Bunny (Beginner Books(R))`,
  author: 'Marilyn Sadler',
};

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71QuWEIWHlL._AC_UL200_SR200,200_.jpg',
  title: `Dog Man: Mothering Heights`,
  author: 'Dav Pilkey',
};

function BookList() {
  return (
    <section className="book-list">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        {/* children from props */}
        <p>Lorem ipsum dolor sit amet.</p>
      </Book>
    </section>
  );
}

const Book = (props) => {
  // object destruction
  const { img, title, author } = props;

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
