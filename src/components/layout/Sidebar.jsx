import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.aside`
  width: 250px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 1rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CategoryLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = ({ categories }) => {
  return (
    <SidebarWrapper>
      <h2>Categories</h2>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <CategoryLink to={`/category/${category}`}>{category}</CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </SidebarWrapper>
  );
};

export default Sidebar;