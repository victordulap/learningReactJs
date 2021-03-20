import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

function BookList() {
  return (
    <section className="book-list">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>It's Not Easy Being a Bunny (Beginner Books(R))</h1>
      <h4>Marilyn Sadler</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
