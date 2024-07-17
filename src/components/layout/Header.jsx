import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.text};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Logo to="/">My Blog</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;