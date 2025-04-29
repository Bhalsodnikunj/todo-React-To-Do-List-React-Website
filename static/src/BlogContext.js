import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome to the Blog', content: 'This is the first post.' },
  ]);

  const addPost = (title, content) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};
