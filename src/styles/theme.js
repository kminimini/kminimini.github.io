import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#f7f7f7',
  text: '#333',
  primary: '#4a90e2',
  secondary: '#50c878',
  accent: '#ff6b6b',
  border: '#e0e0e0',
  cardBg: '#ffffff',
  headerBg: '#ffffff',
  sidebarBg: '#ffffff',
  footerBg: '#333333',
  footerText: '#ffffff',
};

export const darkTheme = {
  background: '#1a1a1a',
  text: '#f0f0f0',
  primary: '#64b5f6',
  secondary: '#81c784',
  accent: '#ff8a80',
  border: '#333333',
  cardBg: '#2a2a2a',
  headerBg: '#2a2a2a',
  sidebarBg: '#2a2a2a',
  footerBg: '#1a1a1a',
  footerText: '#f0f0f0',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    font-family: 'Noto Sans KR', sans-serif;
    transition: all 0.3s linear;
  }

  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.accent};
    }
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s linear;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
`;