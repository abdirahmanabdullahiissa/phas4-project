// components/BookList.js
import React, { useState, useEffect } from 'react';
const BookList = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffectseEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await fetch('https://freetestapi.com/api/v1/books');
            if (response.ok) {
              const data = await response.json();
              setBooks(data);
            } else {
                setError('Error fetching books');
            }
        } catch (error) {
          setError('Error fetching books');
        } finally {
          setIsLoading(false);
        }
      };
      fetchBooks();
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  

