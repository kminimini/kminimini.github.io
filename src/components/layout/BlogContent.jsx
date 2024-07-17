import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from '../pages/Home';
import { posts } from '../../data/posts';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

const MainContent = styled.main`
  flex-grow: 1;
  margin-left: ${props => props.sidebarOpen ? '250px' : '0'};
  transition: margin-left 0.3s ease-in-out;
  padding-bottom: 60px; // Footer의 높이만큼 패딩 추가

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const BlogContent = ({ toggleTheme, isDarkMode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [categories, setCategories] = useState([...new Set(posts.map(post => post.category))]);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const category = location.pathname.split('/').pop();
    if (category === '') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === category));
    }
  }, [location]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <AppWrapper>
      <ContentWrapper>
        <Sidebar categories={categories} isOpen={sidebarOpen} />
        <MainContent sidebarOpen={sidebarOpen}>
          <Header toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<Home posts={filteredPosts} />} />
            <Route path="/category/:category" element={<Home posts={filteredPosts} />} />
          </Routes>
        </MainContent>
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default BlogContent;