import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  text-align: center;
`;
const signLabel = ({ labelText }) => {
  // if (flag === undefined) return null;
  return (
    <Label>
      {labelText}
    </Label>
  );
};
export default React.memo(signLabel);
