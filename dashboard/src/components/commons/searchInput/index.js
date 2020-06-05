import styled from 'styled-components';
import colors from '../../../styles/colors'

const InputBox = styled.input`
    width: 150px;
    height : 23px;
    outline: none;
    text-indent: 5px;
    font-size:12px;
    border: 0;
    border-bottom : 1px solid ${colors.gray300};
`
export default InputBox