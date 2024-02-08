// BookDetails.js
import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>{book.review}</p>
      <StarRating rating={book.rating} /> {/* Use the StarRating component with the book's rating */}
      <img src={book.image_url} alt={book.title} />
    </div>
  );
};

export default BookDetails;
