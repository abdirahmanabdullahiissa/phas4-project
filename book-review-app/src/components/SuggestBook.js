// components/SubmitBook.js
import React, { useState } from 'react';

const SubmitBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://freetestapi.com/api/v1/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author }),
      });
      if (response.ok) {
        console.log('Book submitted successfully');
        setTitle('');
        setAuthor('');
      } else {
        console.error('Error submitting book');
      }
    } catch (error) {
      console.error('Error submitting book', error);
    }
  };

  return (
    <div>
      <h1>Submit a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Submit Book</button>
      </form>
    </div>
  );
};

export default SubmitBook;
