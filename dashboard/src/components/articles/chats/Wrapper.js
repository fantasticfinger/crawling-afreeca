import React from 'react'
import styled from 'styled-components'
// import colors from '../../../styles/colors'

const Wrapper = styled.div`
    width: 100%;
    background-color : white;
    position: relative;
    >#roomContent{
        width:90%;
        margin: 0 auto;
        padding : 20px 0 ;        
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap : 10px;
    }
`

const RoomWrapper=({children})=>{
    return (
        <Wrapper>
            <div id='roomContent'>
                {children}
            </div>
        </Wrapper>
    )
}
export default RoomWrapper