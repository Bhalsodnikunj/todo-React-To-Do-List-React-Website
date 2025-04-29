import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from './BlogContext';

const NewPost = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const { addPost } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Please fill in both the title and content.');
      return;
    }

    addPost(title, content);
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
<div className="new-post">
  <h1>Create New Post</h1>
  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Post title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <textarea placeholder="Post content..." value={content} onChange={(e) => setContent(e.target.value)} />
    <button type="submit">Add Post</button>
  </form>
</div>
  
  );
};

export default NewPost;
