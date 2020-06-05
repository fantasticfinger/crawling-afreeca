import React from 'react';
import {NavWrapper,NavTitleBox,NavUl,NavLi} from '../../../components/commons/nav'
import { useRouteMatch } from "react-router-dom";

const NavLis = React.memo(()=>{
    
    const li_info = [
        {
            cn : 'fas fa-home',
            text : '홈',
            link : '/main/home'
        },
        {
            cn: 'fas fa-list',
            text : '채팅목록조회',
            link : '/main/rooms'
        }
    ];
    return li_info.map(item=>{
        const {cn,text,link} = item;
        const thisname = useRouteMatch(link)? 'nav_ul-select' : 'none'
        return  <NavLi className={thisname} cn={cn} link={link}>{text}</NavLi>
    })
})

function NavContainer (){
    
    return (
        <NavWrapper>
            <NavTitleBox/>
            <NavUl>
                <NavLis/>
            </NavUl>
        </NavWrapper>
    )
}

export default NavContainer;