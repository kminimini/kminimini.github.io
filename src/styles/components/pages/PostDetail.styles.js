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
  line-height: 1.6;
  font-size: 1.1rem;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }

  p {
    margin-bottom: 16px;
  }

  a {
    color: #0366d6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    background-color: #f6f8fa;
    border-radius: 3px;
    font-size: 85%;
    line-height: 1.45;
    overflow: auto;
    padding: 16px;
  }

  code {
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: .2em .4em;
  }

  ul, ol {
    margin-bottom: 16px;
    padding-left: 2em;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: #6a737d;
    border-left: .25em solid #dfe2e5;
  }

  hr {
    height: .25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }
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

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const NavButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  max-width: 45%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  ${props => props.isNext ? 'margin-left: auto;' : ''}

  &:hover {
    opacity: 0.8;
  }

  &:only-child {
    ${props => props.isNext ? 'margin-left: auto;' : 'margin-right: auto;'}
  }
`;