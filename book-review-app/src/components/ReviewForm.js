import React, { useState } from 'react';

const ReviewForm = () => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmitReview = (event) => {
    event.preventDefault();
    // Perform validation here if needed

    // Example: Check if the rating and comment are provided
    if (!rating || !comment) {
      alert('Please provide both a rating and a comment.');
      return;
    }

    // If validation passes, submit the review (send data to server or perform other actions)
    console.log('Submitted review:', { rating, comment });

    // Reset the form fields after submission
    setRating('');
    setComment('');
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <form onSubmit={handleSubmitReview}>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
