import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height : 50%;
    background-color: white;
`
const RoomListWrapper =({children})=>{
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default RoomListWrapper