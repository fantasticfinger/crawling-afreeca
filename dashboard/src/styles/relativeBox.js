import styled from 'styled-components'

const RelativeBox = styled.div`
    position:relative;
    height : ${props => props.height};
    width : ${props => props.width};
`

export default RelativeBox;