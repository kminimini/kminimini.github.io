import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Home from './components/pages/Home';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';

const AppWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex-grow: 1;
  margin-left: 250px; // To account for sidebar
`;

const App = () => {
  const [theme, setTheme] = useState('light');
  const [posts, setPosts] = useState([]); // 일반적으로 이 데이터를 가져옵니다.
  const [categories, setCategories] = useState(['React', 'JavaScript', 'CSS']); // 카테고리 예시

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <AppWrapper>
          <Sidebar categories={categories} />
          <MainContent>
            <Header toggleTheme={toggleTheme} />
            <Routes>
              <Route path="/" element={<Home posts={posts} />} />
              {/* 필요에 따라 경로 추가 */}
            </Routes>
          </MainContent>
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;