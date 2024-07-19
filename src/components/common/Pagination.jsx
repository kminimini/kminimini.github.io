import React from 'react';
import { 
  PaginationWrapper, 
  PageNumber,
  PageButton
} from '../../styles/components/common/Pagination.styles';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const getPageNumbers = () => {
    const pageGroup = Math.floor((currentPage - 1) / 5);
    const start = pageGroup * 5 + 1;
    const end = Math.min(start + 4, totalPages);
    return pageNumbers.slice(start - 1, end);
  };

  return (
    <PaginationWrapper>
      {currentPage > 1 && <PageButton onClick={() => paginate(1)}>&lt;&lt;</PageButton>}
      {currentPage > 5 && <PageButton onClick={() => paginate(currentPage - 5)}>&lt;</PageButton>}
      {getPageNumbers().map(number => (
        <PageNumber 
          key={number} 
          onClick={() => paginate(number)}
          active={currentPage === number}
        >
          {number}
        </PageNumber>
      ))}
      {currentPage <= totalPages - 5 && <PageButton onClick={() => paginate(currentPage + 5)}>&gt;</PageButton>}
      {currentPage < totalPages && <PageButton onClick={() => paginate(totalPages)}>&gt;&gt;</PageButton>}
    </PaginationWrapper>
  );
};

export default Pagination;