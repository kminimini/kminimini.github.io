import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.aside`
  width: 250px;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 1rem;
  height: 100vh;
  position: fixed;
  left: ${props => props.isOpen ? '0' : '-250px'};
  top: 60px;
  overflow-y: auto;
  transition: left 0.3s ease-in-out;
  z-index: 999;

  @media (min-width: 769px) {
    left: 0;
  }
`;

export const SidebarContent = styled.div`
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 3rem;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const ProfileName = styled.h2`
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SocialLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

export const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const CategoryItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const CategoryCount = styled.span`
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.8rem;
`;

export const BioSection = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

export const ViewCountSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
