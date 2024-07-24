import { createGlobalStyle } from 'styled-components';
import DongleLight from '../fonts/Dongle-Light.woff2';
import DongleRegular from '../fonts/Dongle-Regular.woff2';

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
  
  /* 폰트 정의 */
  @font-face {
    font-family: 'Nanum Gothic';
    src: url(${DongleLight}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nanum Gothic';
    src: url(${DongleRegular}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s linear;
    font-family: 'Nanum Gothic', sans-serif;
  }

  /* 다른 요소들에 대한 폰트 설정 */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: bold;
  }
`;