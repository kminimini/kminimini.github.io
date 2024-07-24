import styled from 'styled-components';

export const AboutWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem;
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

export const AboutContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.text};

  p {
    margin-bottom: 1rem;
  }
`;