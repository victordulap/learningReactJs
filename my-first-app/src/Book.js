import React from 'react';

const Book = (props) => {
  console.log(props);
  // object destruction
  const { id, img, title, author } = props;

  // attribute, eventHandler
  // onClick, onMouseOver (react events)
  const deleteDemo = (id) => {
    console.log(`id: ${id}`);
  };

  return (
    <article
      className="book"
      onMouseOver={(e) => {
        // console.log(e.target);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => deleteDemo(id)}>
        delete
      </button>
      {props.children}
    </article>
  );
};

export default Book;
