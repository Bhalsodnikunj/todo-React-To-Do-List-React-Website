import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className="post-card" onClick={() => navigate(`/post/${post.id}`)}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 120)}...</p>
    </div>
  );
};

export default PostCard;
