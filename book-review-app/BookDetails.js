// components/BookDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://freetestapi.com/api/v1/books/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        } else {
          // Handle error cases
          console.error('Failed to fetch book details');
        }
      } catch (error) {
        // Handle fetch error
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <p>Book ID: {book.id}</p>
      <h3>Title: {book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      {/* Add more details and information about the book */}
    </div>
  );
};

export default BookDetails;
