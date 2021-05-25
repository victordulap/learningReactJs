import React, { useState } from 'react';

const List = ({ people, setPeople }) => {
  const removePerson = (id) => {
    setPeople((prevState) => {
      return prevState.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button className="btn" onClick={() => removePerson(id)}>
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
