import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  margin-left: ${props => props.sidebarOpen ? '250px' : '0'};
  transition: margin-left 0.3s ease-in-out;
  padding-bottom: 60px; // Footer의 높이만큼 패딩 추가

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;