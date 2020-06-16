import React from 'react';
import styled from 'styled-components'
import colors from 'styles/colors'
import NavTitleSection from './navTitleSection'
import NavUl from './navUl'
function navWrapper({ children }) {
    const NavWrapper = styled.div`
        height : 100%;
        width : 100%;
        position:relative;
        background-color: ${colors.violet300};
        border-radius : 0px 30px 0 0;
    `

    return (
        <NavWrapper>
            <NavTitleSection />
            <NavUl>
                {children}
            </NavUl>
        </NavWrapper>
    )
}

export default React.memo(navWrapper)