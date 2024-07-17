import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#ffffff',
  text: '#333333',
  secondaryText: '#666666',
};

export const darkTheme = {
  background: '#333333',
  text: '#ffffff',
  secondaryText: '#cccccc',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s linear;
  }
`;