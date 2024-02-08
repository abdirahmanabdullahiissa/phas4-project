// BookDetails.js
import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>{book.review}</p>
      <img src={book.image_url} alt={book.title} />
    </div>
  );
};

export default BookDetails;
