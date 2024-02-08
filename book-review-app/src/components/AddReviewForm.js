// AddReviewForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddReviewForm = () => {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5555/books', { title, review }) // Adjust the URL as per your backend endpoint
      .then(response => {
        // Handle success
        console.log('Review added:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error adding review:', error);
      });
  };

  return (
    <div className="add-review-form">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
