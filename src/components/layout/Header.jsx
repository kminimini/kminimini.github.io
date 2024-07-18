import React from 'react';
import { FaBars, FaSun, FaMoon, FaPlus } from 'react-icons/fa';
import { 
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavLink, 
  MenuButton, 
  ThemeToggle, 
  ToggleThumb, 
  NewPostButton 
} from '../../styles/components/layout/Header.styles';

const Header = ({ toggleTheme, toggleSidebar, isDarkMode }) => {
  return (
    <HeaderWrapper>
      <MenuButton onClick={toggleSidebar}>
        <FaBars />
      </MenuButton>
      <Logo to="/">조촐한 도톨</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NewPostButton to="/new-post">
          <FaPlus /> New Post
        </NewPostButton>
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