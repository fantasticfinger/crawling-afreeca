import styled from 'styled-components';
import colors from '../../styles/colors';
import React from 'react';

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

function RoomListSearchBox({children}) {
    return (
        <SearchBox>
            <div className='searchWrapper'>
                {children}
            </div>
        </SearchBox>
    )
}

export default RoomListSearchBox