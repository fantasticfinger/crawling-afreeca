import React from 'react';
import styled from 'styled-components';
import AuthLogo from './authLogo';

const AuthBox = styled.div`
  position: relative;
  width: 350px;
  display: grid;
  background-color: white;
  flex-direction: row;
  grid-template-columns: 1fr;
  border-radius: 15px;
`;

// eslint-disable-next-line react/prop-types
export default function authBox({ children }) {
  return (
    <AuthBox>
      <AuthLogo />
      {children}
    </AuthBox>
  );
}
