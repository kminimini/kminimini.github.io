import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostWrapper = styled.article`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const PostTitle = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const PostMeta = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 1rem;
`;

export const PostContent = styled.div`
  line-height: 1.6;
`;