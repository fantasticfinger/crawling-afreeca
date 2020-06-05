import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function nav_li({ children, cn, link, ...rest }) {
    const NavLi = styled.li`
        display:flex;
        text-indent:30px;
        align-items:center;
        position: relative;
        height: 40px;
        &:hover{
            background-color: white;
        }
        NavLi + NavLi{
            margin-top: 10px;
        }
    `
    
    return (
        <Link to={link}>
            <NavLi {...rest} >
                <i className={cn}></i>
                {children}
            </NavLi>
        </Link>
    )
}

export default React.memo(nav_li)