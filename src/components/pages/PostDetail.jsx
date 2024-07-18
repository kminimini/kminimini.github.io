// src/components/pages/PostDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';
import {
  PostWrapper,
  PostTitle,
  PostMeta,
  PostContent,
  BackLink
} from '../../styles/components/pages/PostDetail.styles';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PostWrapper>
      <PostTitle>{post.title}</PostTitle>
      <PostMeta>{post.date} | {post.category}</PostMeta>
      <PostContent>{post.content}</PostContent>
      <BackLink to="/">← Back to all posts</BackLink>
    </PostWrapper>
  );
};

export default PostDetail;
