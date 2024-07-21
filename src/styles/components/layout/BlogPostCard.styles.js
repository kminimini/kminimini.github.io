import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.secondaryText};
  border-radius: 8px;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const PostTitle = styled(Link)`
  font-size: 1.2rem;
  color: ${props => props.theme.primary};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.text};
  }
`;

export const PostMeta = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.secondaryText};
`;