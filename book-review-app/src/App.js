import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddReviewForm from './components/AddReviewForm';
import AuthorList from './components/AuthorList'; // Import AuthorList component
import CategoryList from './components/CategoryList'; // Import CategoryList component
import './styles.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksResponse = await axios.get('http://localhost:5555/books');
        setBooks(booksResponse.data);

        const authorsResponse = await axios.post('http://localhost:5555/authors');
        setAuthors(authorsResponse.data);

        const categoriesResponse = await axios.get('http://localhost:5555/categories');
        setCategories(categoriesResponse.data);

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

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://localhost:5555/books?q=${query}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
      setError(error.message);
    }
  };

  return (
    <div className="app">
      <h1>Book Reviews</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="main-content">
        <BookList books={books} onBookSelect={handleBookSelect} />
        {selectedBook && <BookDetails book={selectedBook} />}
        <AuthorList authors={authors} /> {/* Display AuthorList component */}
        <CategoryList categories={categories} /> {/* Display CategoryList component */}
      </div>
      <AddReviewForm />
    </div>
  );
};

export default App;

