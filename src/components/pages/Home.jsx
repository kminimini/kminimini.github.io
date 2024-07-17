import React from 'react';
import styled from 'styled-components';
import BlogPost from '../layout/BlogPost';

const HomeWrapper = styled.div`
  padding: 1rem;
  margin: 60px auto 0;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Home = ({ posts }) => {
  return (
    <HomeWrapper>
      <h1>Latest Posts</h1>
      {posts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </HomeWrapper>
  );
};

export default Home;