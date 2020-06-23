/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';

const UserIdFiled = styled.div`
  text-align: center;
  padding: 0 10px;
  height: 25px;
`;

const UserId = ({ list }) => {
  return list.map((id, index) => {
    return <UserIdFiled key={index}>{id}</UserIdFiled>;
  });
};

export { UserIdFiled };
export default React.memo(UserId);
