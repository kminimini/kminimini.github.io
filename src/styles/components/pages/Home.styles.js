import styled from 'styled-components';

export const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin: 4rem 0 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: ${props => props.theme.primary};
  }
`;

export const MainContent = styled.div`
  margin-top: 2rem;
`;