import styled from 'styled-components'
import colors from '../../../styles/colors'

const RoomInnerWrapper = styled.div`
    border: 2px solid ${colors.gray300};
    position:relative;
    .contents{
        overflow-y: scroll;
        max-height : 1000px;
    }
`
const RoomInnerTitle = styled.div`
    width : 100%;
    height : 50px;
    background-color:${colors.gray300};
    display: flex;
    justify-content: center;
    align-items : center;
    position: relative;
    .searchBox{
        position: absolute;
        right:0;
    }
`
export {RoomInnerWrapper,RoomInnerTitle}