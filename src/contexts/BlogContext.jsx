import React, { createContext, useContext, useState, useMemo } from 'react';
import { posts as initialPosts } from '../data/posts';

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  const categories = useMemo(() => {
    return [...new Set(posts.map(post => post.category))];
  }, [posts]);

  const categoryCounts = useMemo(() => {
    return posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {});
  }, [posts]);

  const addPost = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  const value = {
    posts,
    categories,
    categoryCounts,
    addPost
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};