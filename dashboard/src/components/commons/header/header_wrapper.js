import React from 'react';
import styled from 'styled-components';

const HeaderWrapper= styled.header`
    width: 100%;
    height: 100px;
    background-color : white;
    margin-bottom : 20px;
    position:relative;
`

function header_wrapper({children}){
    return (
        <HeaderWrapper>
            {children}
        </HeaderWrapper>
    )
}

export default header_wrapper