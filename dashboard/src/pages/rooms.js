
import React from 'react' 
import PageTem from '../components/commons/pageTemplate'
import Rooms from '../components/contents/roomList'
export default function rooms ({num}){
    return (
        <PageTem num={num}>
            <Rooms></Rooms>
        </PageTem>
    )
}