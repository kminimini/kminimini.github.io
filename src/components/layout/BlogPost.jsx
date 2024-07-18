import React from 'react';
import { 
  PostWrapper,
  PostTitle,
  PostMeta,
  PostContent
 } from '../../styles/components/layout/BlogPost.styles';

const BlogPost = ({ id, title, date, content }) => {
  return (
    <PostWrapper>
      <PostTitle to={`/post/${id}`}>{title}</PostTitle>
      <PostMeta>{date}</PostMeta>
      <PostContent>{content.substring(0, 150)}...</PostContent>
    </PostWrapper>
  );
};

export default BlogPost;