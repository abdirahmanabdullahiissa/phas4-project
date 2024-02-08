import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from "../Loader/Loader";
import Book from "../BookList/Book";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const API_URL = "http://localhost:5555/books"; // Update with your Flask backend endpoint

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultTitle, setResultTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function fetchBooks() {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setBooks(data);
        setLoading(false);
        setResultTitle('Book List'); // Set a default title
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            books.map((item, index) => (
              <Book key={index} {...item} />
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default BookList;
