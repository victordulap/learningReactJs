import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showLess, setShowLess] = useState(true);
  const lessInfo = info.substring(0, 200);

  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showLess ? `${lessInfo} ...` : info}{' '}
          <button onClick={() => setShowLess(!showLess)}>
            {showLess ? 'read more' : 'show less'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
