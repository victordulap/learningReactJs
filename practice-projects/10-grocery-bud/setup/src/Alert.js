import React, { useEffect } from 'react';

const Alert = ({ red, text }) => {
  const className = red ? 'alert-danger' : 'alert-success';
  return <p className={`alert ${className}`}>{text}</p>;
  //<p class="alert alert-success">item added to the list</p>
};

export default Alert;
