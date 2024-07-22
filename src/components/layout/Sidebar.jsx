import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../images/profile-image.jpg';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { 
  SidebarWrapper, 
  SidebarContent, 
  ProfileSection, 
  ProfileImage, 
  ProfileName, 
  SocialLinks, 
  SocialLink, 
  CategoryList, 
  CategoryItem, 
  CategoryLink, 
  CategoryCount, 
  BioSection, 
  ViewCountSection 
} from '../../styles/components/layout/Sidebar.styles';

const Sidebar = ({ categories, isOpen, categoryCounts, toggleSidebar }) => {
  const [viewCounts, setViewCounts] = useState({ daily: 0, total: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const updateViewCounts = () => {
      const now = new Date();
      const storedData = JSON.parse(localStorage.getItem('viewCounts')) || { 
        daily: 0, 
        total: 0, 
        lastReset: now.toISOString(),
        lastVisit: null
      };

      const lastReset = new Date(storedData.lastReset);
      const lastVisit = storedData.lastVisit ? new Date(storedData.lastVisit) : null;

      if (!lastVisit || lastVisit.toDateString() !== now.toDateString()) {
        if (now.toDateString() !== lastReset.toDateString()) {
          storedData.daily = 1;
          storedData.lastReset = now.toISOString();
        } else {
          storedData.daily += 1;
        }
        storedData.total += 1;
        storedData.lastVisit = now.toISOString();

        localStorage.setItem('viewCounts', JSON.stringify(storedData));
      }

      setViewCounts({ daily: storedData.daily, total: storedData.total });
    };

    updateViewCounts();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarContent isOpen={isOpen}>
        <ProfileSection>
          <ProfileImage src={profileImage} alt="Blog Host" />
          <ProfileName>도톨</ProfileName>
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
        <BioSection>
          <p>안녕하세요!</p>
        </BioSection>
        <h2>Categories</h2>
        <CategoryList>
          {categories.map((category, index) => (
            <CategoryItem key={index} onClick={() => handleCategoryClick(category)}>
              <CategoryLink>{category}</CategoryLink>
              <CategoryCount>{categoryCounts[category] || 0}</CategoryCount>
            </CategoryItem>
          ))}
        </CategoryList>
        <ViewCountSection>
          <p>오늘 조회수: {viewCounts.daily}</p>
          <p>전체 조회수: {viewCounts.total}</p>
        </ViewCountSection>
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;