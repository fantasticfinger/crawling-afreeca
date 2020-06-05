import styled from 'styled-components'
import React from 'react';
import colors from '../../styles/colors'

const Input = styled.input`
    width: 300px;
    height: 40px;
    border: 0 ;
    padding:0;
    padding-left: 10px;
    font-size: 15px;
    outline:none;
    margin: 0 auto;
    border-bottom: 2px solid ${colors.gray200}; 
    &+Input{
        margin-top: 15px auto;
    }
    
`

const auth_input = React.memo(({...rest})=>{
    return (
        <Input 
            {...rest}
        />
    )
})


export default auth_input;