import React from 'react';
import {
  AboutWrapper,
  AboutTitle,
  AboutContent
} from '../../styles/components/pages/About.styles';

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        <p>안녕하세요! 저는 풀스택 개발자를 꿈꾸는 도톨입니다.</p>
        <p>이 블로그는 제가 배운 것들을 공유하고, 개발 여정을 기록하는 공간입니다.</p>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;