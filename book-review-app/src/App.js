import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import BookList from './components/BookList';
import Search from './components/SearchForm/Search';
import BookDetails from './components/BookDetails/BookDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
