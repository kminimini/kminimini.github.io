import React from 'react';
import BlogPost from '../layout/BlogPost';
import { HomeWrapper } from '../../styles/components/pages/Home.styles'

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