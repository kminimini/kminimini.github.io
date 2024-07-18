import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostWrapper = styled.article`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 2rem;
  margin: 60px auto 0;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const PostTitle = styled.h1`
  margin-bottom: 1rem;
`;

export const PostMeta = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryText};
  margin-bottom: 2rem;
`;

export const PostContent = styled.div`
  line-height: 1.8;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  color: ${props => props.theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;