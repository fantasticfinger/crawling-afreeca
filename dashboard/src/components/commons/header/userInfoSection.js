/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const UserSection = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function userInfoSection({ children }) {
  return (
    <UserSection>
      <>{children}</>
    </UserSection>
  );
}

export default userInfoSection;
