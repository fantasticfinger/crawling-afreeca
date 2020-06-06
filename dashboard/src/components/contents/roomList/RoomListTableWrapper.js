import React from 'react';
const RoomstableWrapper = styled.div`
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

function RoomListTableWrapper({ childre }) {
    return (
        <RoomstableWrapper>

            <RoomsTable>
                <TableTitle />
                {childre}
            </RoomsTable>
        </RoomstableWrapper>
    )
}

export default RoomListTableWrapper;