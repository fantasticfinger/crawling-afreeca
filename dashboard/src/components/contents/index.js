import React from 'react';
import styled from 'styled-components'

const ContentWrapper = styled.article`
    width: 100%;
    min-height: 680px;
    height:100%;
`
export default function content({children}){
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    )
}