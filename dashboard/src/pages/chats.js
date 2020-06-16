import PageTem from '../components/commons/pageTemplate';
import ChatsComponent from 'components/articles/chats'
import React from 'react';

export default function chats
    () {
    return (
        <PageTem num={1}>
            <ChatsComponent />
        </PageTem>
    );
}
