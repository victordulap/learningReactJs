import React, { useEffect } from 'react';

const Alert = ({ type, msg }) => {
  return <p className={`alert ${type}`}>{msg}</p>;
};

export default Alert;
