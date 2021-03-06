import styled from 'styled-components';
import colors from '../../../styles/colors';
import React from 'react';

const SearchBoxWarpper = styled.div`
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

const ListSearchBoxWrapper = ({ children }) => {
    return (
        <SearchBoxWarpper>
            <div className='searchWrapper'>
                {children}
            </div>
        </SearchBoxWarpper>
    )
}

export default ListSearchBoxWrapper