import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 1rem;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024 My Blog. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;