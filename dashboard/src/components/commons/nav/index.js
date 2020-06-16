import NavWrapper from './navWrapper'
import NavLi from './navLi'
import React from 'react'
const NavLis = React.memo(({ num }) => {
    const li_info = [
        {
            cn: 'fas fa-home',
            text: '홈',
            link: '/main/home',
        },
        {
            cn: 'fas fa-list',
            text: '채팅목록조회',
            link: '/main/rooms/1',
        }
    ];
    return li_info.map((item, idx) => {
        const { cn, text, link } = item;
        const thisname = num === idx ? 'nav_ul-select' : 'none'
        return <NavLi className={thisname} cn={cn} link={link} key={`Nav${idx}`}>{text}</NavLi>
    })
})

function Nav({ num }) {
    return (
        <NavWrapper>
            <NavLis num={num} />
        </NavWrapper>
    )
}

export default Nav