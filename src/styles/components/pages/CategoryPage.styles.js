import styled from 'styled-components';

export const CategoryPageWrapper = styled.div`
  padding: 5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  
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

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.2rem;
  margin-top: 2rem;
`;

export const PostCard = styled.div`
  background-color: ${props => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const PostTitle = styled.h2`
  font-size: 1.2rem;
  margin: 1rem;
  color: ${props => props.theme.text};
`;

export const PostMeta = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryText};
  margin: 0 1rem 1rem;
`;