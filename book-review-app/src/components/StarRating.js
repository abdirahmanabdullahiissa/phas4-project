// StarRating.js
import React, { useState } from 'react';

const StarRating = ({ rating, onRate }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const handleMouseOver = (hoveredRating) => {
    setHoveredRating(hoveredRating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleClick = (selectedRating) => {
    onRate(selectedRating);
  };

  return (
    <div className="star-rating star-container">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= (hoveredRating !== null ? hoveredRating : rating);
        return (
          <span
            key={i}
            className={`star ${filled ? 'filled' : ''}`}
            onMouseOver={() => handleMouseOver(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
