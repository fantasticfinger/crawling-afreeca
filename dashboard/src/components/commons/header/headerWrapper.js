import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 100px;
    background-color : white;
    margin-bottom : 20px;
    position:relative;
`
const Wrapper = styled.div`
    width: 200px;
    position:absolute;
    right : -10px;
    top: 28px;
    height: 40px;
    font-size : 15px;
    display:flex;
`

function header_wrapper({ children }) {
    return (
        <HeaderWrapper>
            <Wrapper>
                {children}
            </Wrapper>
        </HeaderWrapper>
    )
}

export default header_wrapper