// components/PostForm.js
import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmitPost = (event) => {
    event.preventDefault();
    // Handle post submission logic with the title and content
    console.log('Submitted post:', { title, content });
    // You can send the form data to the server or perform other actions here
  };

  return (
    <div>
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmitPost}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
