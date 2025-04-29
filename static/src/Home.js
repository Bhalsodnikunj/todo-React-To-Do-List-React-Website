import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import PostCard from './PostCard';

const Home = () => {
  const { posts } = useContext(BlogContext);
  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default Home;
