import styled from 'styled-components';
import React from 'react';
import colors from 'styles/colors';

const Button = styled.button`
  width: 300px;
  height: 40px;
  margin: 10px auto;
  background-color: ${colors.blue700};
  border: 0;
  color: white;
  font-size: 15px;
  font-weight: 700;
  & + Button {
    margin-bottom: 20px;
  }
`;
const AuthButton = React.memo(({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
});

export default AuthButton;
