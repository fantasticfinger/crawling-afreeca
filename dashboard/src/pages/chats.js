import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ChatsComponent from 'components/articles/chats';
import PageTem from '../components/commons/pageTemplate';

export default function chats() {
  return (
    <PageTem num={1}>
      <ChatsComponent />
    </PageTem>
  );
}
