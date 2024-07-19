import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategorySectionWrapper = styled.section`
  margin-bottom: 3rem;
  background-color: ${props => props.theme.background};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
`;

export const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.text};
  border-bottom: 2px solid ${props => props.theme.primary};
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export const MorePostsLink = styled(Link)`
  display: block;
  text-align: right;
  margin-top: 1rem;
  color: ${props => props.theme.primary};
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;