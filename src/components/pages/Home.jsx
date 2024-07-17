import React from 'react';
import styled from 'styled-components';
import BlogPost from '../BlogPost';

const HomeWrapper = styled.div`
  padding: 1rem;
  margin-left: 250px; // To account for sidebar
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