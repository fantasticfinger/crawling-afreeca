import React,{useState} from 'react';
import {RoomListWrapper, RoomListSearchBox, RoomListTable, RoomListTableWrapper, TableItem} from '../../../components/contents/roomList'
import SearchBox from '../../../components/commons/searchBox'
import PageNationComponent from 'components\contents\pagenation.js'
import { useParams } from 'react-router';

const PageNation =()=>{
     const [currentPage,setCurrentPage] = useState(1);

    return (
        <>
            <PageNationComponent />
        </>
    )
}
const RoomListContainer =()=>{
    return (
        <RoomListWrapper>
            <RoomListSearchBox>
                <SearchBox/>
            </RoomListSearchBox>
            <RoomListTableWrapper>
                <RoomListTable>
                    <TableItem/>
                </RoomListTable>
            </RoomListTableWrapper>
        </RoomListWrapper>
    )
}


export default RoomListContainer;
