import React from 'react';
import styled from 'styled-components';
import { UserIdFiled } from './userId';

const TextUnit = styled.div`
  display: flex;
  min-height: 25px;
  position: relative;
  > div {
    flex: none;
  }
  > span {
    padding: 0 10px;
  }
  word-break: break-all;
  white-space: normal;
`;

const UserChat = ({ chatList }) => {
  return chatList.map((chat, idx) => {
    const { uid, text } = chat;
    return (
      // eslint-disable-next-line react/no-array-index-key
      <TextUnit key={uid + idx}>
        <UserIdFiled>{uid}</UserIdFiled>
        <>:</>
        <span>{text}</span>
      </TextUnit>
    );
  });
};

export default React.memo(UserChat);
