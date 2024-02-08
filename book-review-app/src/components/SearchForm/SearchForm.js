import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  // Remove the invalid flag \g from the regular expression
  const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        pattern={regex}
        title="Only letters, numbers, spaces, hyphens, and underscores are allowed"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
