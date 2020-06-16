import React from 'react'
import PageTem from '../components/commons/pageTemplate'
import RoomComponent from 'components/articles/contents'

export default function contents() {
    return (
        <PageTem num={1}>
            <RoomComponent />
        </PageTem>
    )
}