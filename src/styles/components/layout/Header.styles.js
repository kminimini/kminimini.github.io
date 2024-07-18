import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
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

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.text};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuButton = styled.button`
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

export const ThemeToggle = styled.button`
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

export const ToggleThumb = styled.span`
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

export const NewPostButton = styled(Link)`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    opacity: 0.8;
  }
`;