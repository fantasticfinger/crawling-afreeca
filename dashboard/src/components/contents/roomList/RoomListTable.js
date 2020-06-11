import React from 'react';
import styled from 'styled-components';
import {TableRow} from './TableItem';

const RoomsTable = styled.div`
    margin: 0 auto;
    position: relative;
    border : 1px solid #dee2e6;
    width:95%;
    text-align:center;
`

const TableRowTitle = styled(TableRow)`
    background-color : #dee2e6;
`
const TableTitle =()=>{
    return (
        <TableRowTitle>
            <div>글번호</div>
            <div>BJ명</div>
            <div>방송시작시간</div>
        </TableRowTitle>
    );
}
const RoomListTable= ({children})=>{
    return (
        <RoomsTable>
            <TableTitle/>
            {children}
        </RoomsTable>
    )
}   


export default RoomListTable