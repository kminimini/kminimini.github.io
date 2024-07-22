import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
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
import { getPostsByCategory } from '../../data/postManager';

const CategoryPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // 카테고리가 변경될 때마다 currentPage를 1로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // URL에서 페이지 번호를 가져옴
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(page);
  }, [location]);

  // getPostsByCategory 함수를 사용하여 해당 카테고리의 게시글을 가져옴
  const posts = getPostsByCategory(category);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // URL을 업데이트하여 페이지 번호를 포함시킴
    window.history.pushState({}, '', `?page=${pageNumber}`);
  };

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
        totalPosts={posts.length} 
        paginate={paginate}
        currentPage={currentPage}
      />
    </CategoryPageWrapper>
  );
};

export default CategoryPage;