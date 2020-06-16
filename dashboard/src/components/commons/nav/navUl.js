import React from 'react';
import styled from 'styled-components'
import RelativeBox from 'styles/relativeBox'

function navUl({ children }) {
    const NavUl = styled.ul`
        margin-top: 30px;
        text-align: center;
        width: 100%;
        padding:0;
        list-style : none;
        .nav_ul-select{
            background-color: white;
        }
    `
    return (
        <RelativeBox>
            <NavUl>
                {children}
            </NavUl>
        </RelativeBox>
    )
}

export default React.memo(navUl)