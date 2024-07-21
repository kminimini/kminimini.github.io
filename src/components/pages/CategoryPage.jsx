import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Pagination from '../common/Pagination';
import { 
  CategoryPageWrapper, 
  CategoryTitle, 
  PostGrid,
  PostCard,
  PostTitle,
  PostMeta
} from '../../styles/components/pages/CategoryPage.styles';

const CategoryPage = ({ posts }) => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;

  const filteredPosts = posts.filter(post => post.category.toLowerCase() === category.toLowerCase());

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <CategoryPageWrapper>
      <CategoryTitle>{category}</CategoryTitle>
      <PostGrid>
        {currentPosts.map(post => (
          <PostCard key={post.id}>
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              <PostTitle>{post.title}</PostTitle>
              <PostMeta>{post.date}</PostMeta>
            </Link>
          </PostCard>
        ))}
      </PostGrid>
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={filteredPosts.length} 
        paginate={paginate}
        currentPage={currentPage}
      />
    </CategoryPageWrapper>
  );
};

export default CategoryPage;