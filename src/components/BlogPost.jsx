import React from 'react';
import styled from 'styled-components';

const PostWrapper = styled.article`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;

const PostTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const PostMeta = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  line-height: 1.6;
`;

const BlogPost = ({ title, date, content }) => {
  return (
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      <PostMeta>{date}</PostMeta>
      <PostContent>{content}</PostContent>
    </PostWrapper>
  );
};

export default BlogPost;