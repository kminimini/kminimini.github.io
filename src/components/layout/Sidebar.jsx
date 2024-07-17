import React from 'react';
import styled from 'styled-components';
import profileImage from '../../images/profile-image.jpg';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SidebarWrapper = styled.aside`
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

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-top: 3rem;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const ProfileName = styled.h2`
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CategoryLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = ({ categories, isOpen }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      <ProfileSection>
        <ProfileImage src={profileImage} alt="Blog Host" />
        <ProfileName>Kminimini</ProfileName>
        <SocialLinks>
          <SocialLink href="https://github.com/kminimini/kminimini" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
          <SocialLink href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:jane@example.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </ProfileSection>
      <h2>Categories</h2>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem key={index}>
            <CategoryLink to={`/category/${category}`}>{category}</CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </SidebarWrapper>
  );
};

export default Sidebar;