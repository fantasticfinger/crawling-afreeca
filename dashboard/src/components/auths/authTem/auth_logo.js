
import React from 'react';
import styled from 'styled-components'
import colors from '../../../styles/colors'

const logoUrl="//res.afreecatv.com/images/afmain/logo_main.gif";
const Logo = styled.img`
    margin: 0 auto;
    width:300px;
`

export default function  login_logo (){
    return(
        <Logo src = {logoUrl}/>
    )
}