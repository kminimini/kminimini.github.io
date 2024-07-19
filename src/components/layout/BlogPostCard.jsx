import React from 'react';
import { 
  CardWrapper, 
  PostTitle, 
  PostMeta,
} from '../../styles/components/layout/BlogPostCard.styles';

const BlogPostCard = ({ post }) => {
  return (
    <CardWrapper>
      <PostTitle to={`/post/${post.id}`}>{post.title}</PostTitle>
      <PostMeta>
        {post.date} | {post.category}
      </PostMeta>
    </CardWrapper>
  );
};

export default BlogPostCard;