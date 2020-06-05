import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'


function nav_wrapper ({children}){
    const NavWrapper = styled.div`
        height : 100%;
        width : 100%;
        position:relative;
        background-color: ${colors.violet300};
        border-radius : 0px 30px 0 0;
    `

    return (
        <NavWrapper>
            {children}
        </NavWrapper>
    )
}

export default React.memo(nav_wrapper)