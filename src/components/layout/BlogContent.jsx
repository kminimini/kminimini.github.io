import React, { useState, useEffect, useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import NewPost from '../pages/NewPost';
import ScrollToTopButton from '../common/ScrollToTopButton';
import { posts as initialPosts } from '../../data/posts';
import {
  AppWrapper,
  ContentWrapper,
  MainContent
} from '../../styles/components/layout/BlogContent.styles'

const BlogContent = ({ toggleTheme, isDarkMode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [posts, setPosts] = useState(initialPosts);
  const location = useLocation();

  const categories = useMemo(() => [...new Set(posts.map(post => post.category))], [posts]);

  const filteredPosts = useMemo(() => {
    const category = location.pathname.split('/').pop();
    return category === '' ? posts : posts.filter(post => post.category === category);
  }, [location, posts]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const addPost = (newPost) => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  const categoryCounts = useMemo(() => {
    return posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    }, {});
  }, [posts]);

  return (
    <AppWrapper>
      <ContentWrapper>
        <Sidebar 
          categories={categories} 
          isOpen={sidebarOpen} 
          categoryCounts={categoryCounts}
        />
        <MainContent sidebarOpen={sidebarOpen}>
          <Header toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<Home posts={posts} />} />
            <Route path="/category/:category" element={<Home posts={filteredPosts} />} />
            <Route path="/post/:id" element={<PostDetail posts={posts} />} />
            <Route path="/new-post" element={<NewPost addPost={addPost} />} />
          </Routes>
        </MainContent>
      </ContentWrapper>
      <Footer />
      <ScrollToTopButton/>
    </AppWrapper>
  );
};

export default BlogContent;