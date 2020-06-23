import React from 'react';
import styled from 'styled-components';

const RoomstableWrapper = styled.div`
  width: 100%;
  background-color: white;
  margin-top: 20px;
  position: relative;
  padding-top: 10px;
  padding-bottom: 30px;
  font-size: 15px;
`;

// eslint-disable-next-line react/prop-types
function ListTableWrapper({ children }) {
  return <RoomstableWrapper>{children}</RoomstableWrapper>;
}

export default ListTableWrapper;
