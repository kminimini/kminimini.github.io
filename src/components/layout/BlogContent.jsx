import React, { useState, useEffect/*, useMemo*/ } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
// import NewPost from '../pages/future/NewPost'; // NewPost
import CategoryPage from '../pages/CategoryPage';
import ScrollToTopButton from '../common/ScrollToTopButton';
import { /* getPosts,*/ getCategories, getCategoryCounts/*, addPost */ } from '../../data/postManager';
import {
  AppWrapper,
  ContentWrapper,
  MainContent
} from '../../styles/components/layout/BlogContent.styles'

const BlogContent = ({ toggleTheme, isDarkMode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);
  const navigate = useNavigate();
  const location = useLocation();

  // getPosts, getCategories, getCategoryCounts 함수를 사용하여 데이터를 가져옴.
  // const posts = getPosts(); // NewPost
  const categories = getCategories();
  const categoryCounts = getCategoryCounts();

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // NewPost
  /*
  const handleAddPost = (newPost) => {
    addPost(newPost);
  };
  */

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`)
  };

  return (
    <AppWrapper>
      <ContentWrapper>
        <Sidebar 
          categories={categories} 
          isOpen={sidebarOpen} 
          categoryCounts={categoryCounts}
          onCategoryClick={handleCategoryClick}
          toggleSidebar={toggleSidebar}
        />
        <MainContent sidebarOpen={sidebarOpen}>
          <Header 
            toggleTheme={toggleTheme} 
            toggleSidebar={toggleSidebar} 
            isDarkMode={isDarkMode} 
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/post/:id" element={<PostDetail />} />
            {/*<Route path="/new-post" element={<NewPost addPost={handleAddPost} />} />*/} {/* NewPost */}
          </Routes>
        </MainContent>
      </ContentWrapper>
      <Footer />
      <ScrollToTopButton/>
    </AppWrapper>
  );
};

export default BlogContent;