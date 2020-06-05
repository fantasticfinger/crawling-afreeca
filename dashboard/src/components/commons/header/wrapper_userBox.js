import React from 'react';
import styled from 'styled-components';

const WrapperUserBox = styled.div `
    width: 200px;
    position:absolute;
    right : -10px;
    top: 28px;
    height: 40px;
    font-size : 15px;
    display:flex;
`

function wrapper_userBox({children}){
    return (
        <WrapperUserBox>
            {children}
        </WrapperUserBox>
    )
}

export default wrapper_userBox