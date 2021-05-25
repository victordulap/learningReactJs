import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [indexOfPerson, setIndexOfPerson] = useState(0);
  // const [person, setPerson] = useState(people[indexOfPerson]);
  const { text, name, image, job } = people[indexOfPerson];

  // console.log(people);

  const nextPerson = () => {
    setIndexOfPerson((prevState) => {
      const newIndex = prevState + 1;
      return newIndex < people.length ? newIndex : 0;
    });
  };
  const prevPerson = () => {
    setIndexOfPerson((prevState) => {
      const newIndex = prevState - 1;
      return newIndex >= 0 ? newIndex : people.length - 1;
    });
  };
  const randomPerson = () => {
    setIndexOfPerson((prevState) => {
      const newIndex = Math.floor(Math.random() * people.length);
      console.log(newIndex);
      return newIndex;
    });
  };

  return (
    <section className="container">
      <div className="title">
        <h2>out reviews</h2>
        <div className="underline"></div>
      </div>

      <article className="review">
        <div className="img-container">
          <img src={image} alt="" className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </section>
  );
};

export default Review;
