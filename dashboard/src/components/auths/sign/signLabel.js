import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  text-align: center;
`;
const signLabel = ({ flag }) => {
  if (flag === undefined) return null;
  return <Label>{flag ? '일치합니다' : '불일치합니다'}</Label>;
};
export default React.memo(signLabel);
