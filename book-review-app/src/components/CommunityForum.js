// components/CommunityForum.js
import React, { useState, useEffect } from 'react';

const CommunityForum = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/posts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          setError('Error fetching posts');
        }
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Community Forum</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityForum;
