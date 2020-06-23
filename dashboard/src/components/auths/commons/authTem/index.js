import React from 'react';
import styled from 'styled-components';
import colors from 'styles/colors';
import AuthBox from './authBox';

const WapperAuth = styled.div`
  min-width: 1140px;
  min-height: 800px;
  height: 100vh;
  background: ${colors.violet300};
  display: grid;
  justify-content: center;
  align-items: center;
`;

function temp({ children }) {
  return (
    <WapperAuth>
      <AuthBox>{children}</AuthBox>
    </WapperAuth>
  );
}

export default temp;
