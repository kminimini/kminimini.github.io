import React from 'react';
import CategorySection from '../layout/CategorySection';
import { HomeWrapper, MainTitle, MainContent } from '../../styles/components/pages/Home.styles';

const Home = ({ posts }) => {
  const categories = ['지식 공유', '문제 해결', '일상 공유'];

  return (
    <HomeWrapper>
      <MainTitle>조촐한 도톨의 블로그</MainTitle>
      <MainContent>
        {categories.map((category, index) => (
          <CategorySection 
            key={index} 
            category={category} 
            posts={posts.filter(post => post.mainCategory === category)}
          />
        ))}
      </MainContent>
    </HomeWrapper>
  );
};

export default Home;