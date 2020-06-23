import React from 'react';
import RoomComponent from 'components/articles/contents';
import PageTem from '../components/commons/pageTemplate';

export default function contents() {
  return (
    <PageTem num={1}>
      <RoomComponent />
    </PageTem>
  );
}
