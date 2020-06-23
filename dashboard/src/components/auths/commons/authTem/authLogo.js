import React from 'react';
import styled from 'styled-components';

const logoUrl = '//res.afreecatv.com/images/afmain/logo_main.gif';
const Logo = styled.img`
  margin: 0 auto;
  width: 300px;
`;

export default function loginLogo() {
  return <Logo src={logoUrl} />;
}
