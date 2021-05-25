import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ r, g, b, percent, colorClass }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  const color = rgbToHex(r, g, b);
  return (
    <article
      className={`color ${colorClass}`}
      style={{ background: color }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(color);
      }}
    >
      <p className="percent-value">{percent}%</p>
      <p className="color-value">{color}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
