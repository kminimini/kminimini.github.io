import React, { useState } from 'react';
import BlogPostCard from './BlogPostCard';
import Pagination from '../common/Pagination';
import { 
  CategorySectionWrapper, 
  CategoryTitle, 
  PostGrid 
} from '../../styles/components/layout/CategorySection.styles';

const CategorySection = ({ category, posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <CategorySectionWrapper>
      <CategoryTitle>{category}</CategoryTitle>
      <PostGrid>
        {currentPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </PostGrid>
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate}
        currentPage={currentPage}
      />
    </CategorySectionWrapper>
  );
};

export default CategorySection;