import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  height: 60px;
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

const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggle = styled.button`
  background: ${props => props.theme.primary};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
  width: 60px;
  height: 30px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  ${props => props.isActive && `
    transform: translateX(30px);
  `}

  svg {
    transition: all 0.3s ease;
    transform: ${props => props.isActive ? 'rotate(360deg)' : 'rotate(0)'};
  }
`;

const Header = ({ toggleTheme, toggleSidebar, isDarkMode }) => {
  return (
    <HeaderWrapper>
      <MenuButton onClick={toggleSidebar}>
        <FaBars />
      </MenuButton>
      <Logo to="/">My Blog</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <ThemeToggle onClick={toggleTheme}>
          <ToggleThumb isActive={isDarkMode}>
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </ToggleThumb>
        </ThemeToggle>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;