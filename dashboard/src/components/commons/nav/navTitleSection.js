import React from 'react';
import styled from 'styled-components';
import RelativeBox from 'styles/relativeBox';
import colors from 'styles/colors';

function navTitleBox() {
  const NavTitleBox = styled.div`
    position: absolute;
    width: 100%;
    right: 0;
    height: 150px;
    margin: 0 auto;
    border-radius: 0 30px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.violet100};
    opacity: 0.5;
  `;
  return (
    <RelativeBox height="150px">
      <NavTitleBox>
        <RelativeBox>
          <h2>Dashboard</h2>
        </RelativeBox>
      </NavTitleBox>
    </RelativeBox>
  );
}

export default React.memo(navTitleBox);
