// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddReviewForm from './components/AddReviewForm';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/books'); // Adjust the URL as per your backend endpoint
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="app">
      <h1>Book Reviews</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="main-content">
        <BookList books={books} onBookSelect={handleBookSelect} />
        {selectedBook && <BookDetails book={selectedBook} />}
      </div>
      <AddReviewForm />
    </div>
  );
};

export default App;
