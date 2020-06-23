import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  width: 100%;
  min-height: 680px;
  height: 100%;
`;
export default function Article({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
