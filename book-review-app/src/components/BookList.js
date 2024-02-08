// BookList.js
import React from 'react';

const BookList = ({ books, onBookSelect }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => onBookSelect(book)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
