import React from 'react'; 
import styled from 'styled-components';
import PageNation from './pagenation';
import colors from '../../styles/colors';
import SearchInput from '../commons/searchInput'
import SearchButton from '../commons/searchButton'

const RoomsWrapper = styled.div`
    height : 50%;
    background-color: white;

`
const SearchBox = styled.div`
    position: relative;
    height: 50px;
    width:100%;
    border-bottom : 2px solid ${colors.gray300};
    .searchWrapper{
        position:absolute; 
        right: 60px;
        top:12px;
    }
`
const RoomstableWrapper= styled.div`
    width : 100%;
    background-color:white;
    margin-top: 20px;
    position:relative;
    padding-top:10px;
    padding-bottom : 30px;
    font-size: 15px;
`
const RoomsTable = styled.div`
    margin: 0 auto;
    position: relative;
    border : 1px solid #dee2e6;
    width:95%;
    text-align:center;
`
const TableRow = styled.div`
    display:grid;
    grid-template-columns : 1fr 5fr 3fr;
    height: 35px;
    border-bottom: 1px solid #dee2e6;
    padding-top:10px;
    
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
const TableItem = ({list})=>{
    let arr= [] 
    for(let i = 0; i < 20 ; i ++){
        arr.push( 
        <TableRow>
            <div>{i+1}</div>
            <div>{list[i].id}</div>
            <div>{list[i].data}</div>
        </TableRow>)
    }
    return arr;
}

export default function rooms(){
    return (
        <RoomsWrapper>
            <SearchBox>
                <div className='searchWrapper'>
                    <SearchInput placeholder='bj이름으로 검색'/>
                    <SearchButton>찾기</SearchButton>
                </div>
            </SearchBox>

            <RoomstableWrapper>

                <RoomsTable>
                    <TableTitle/>
                    <TableItem list = {temp}/>
                </RoomsTable>

                <PageNation start={1} end = {10}/>
                
            </RoomstableWrapper>
        </RoomsWrapper>
    )
}

const temp = [
    {
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },{
        id: "bjbjbjbjbj",
        data : 20190101,
    },
]