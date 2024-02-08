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

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const filled = (hoveredRating !== null ? i <= hoveredRating : i <= rating);
    stars.push(
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
  }

  return (
    <div className="star-rating star-container">
      {stars}
    </div>
  );
};

export default StarRating;
