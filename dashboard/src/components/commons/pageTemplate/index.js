import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Nav from '../nav';
import Article from '../../articles';
import colors from '../../../styles/colors';

const Wrapper = styled.div`
  min-width: 1140px;
  min-height: 800px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  background-color: ${colors.gray200};
  grid-template-columns: 1fr 5fr;
`;
const Scroll = styled.div`
  overflow: scroll;
`;
function PageTemplate({ children, num }) {
  return (
    <Wrapper>
      <Nav num={num} />
      <Scroll id="scroll-wrapper">
        <Header />
        <Article>{children}</Article>
      </Scroll>
    </Wrapper>
  );
}

export default PageTemplate;
