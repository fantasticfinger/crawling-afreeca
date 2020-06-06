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


function RoomListTableWrapper({ childre }) {
    return (
        <RoomstableWrapper>
            {childre}
        </RoomstableWrapper>
    )
}

export default RoomListTableWrapper;