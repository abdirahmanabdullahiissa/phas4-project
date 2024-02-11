// Search.js
import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5555/search?q=${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Books..."
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;