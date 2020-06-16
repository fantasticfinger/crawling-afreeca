import React, { useEffect, useCallback } from 'react';
import HeaderWrapper from './headerWrapper'
import UserInfoSection from './userInfoSection'
import { useRegisterState, checkLogin, useRegisterDispath } from 'contexts/BaseContext'
import { useHistory } from 'react-router-dom';
import { logout } from 'apis/auth'

const ERROR = <div>에러가 발생했습니다</div>;
const LOADING = <div>loading</div>;
function Header() {
    const state = useRegisterState();
    const dispatch = useRegisterDispath();

    const { loading, error, data } = state.register

    const history = useHistory();
    const handleLogout = useCallback(async () => {
        await logout();
        history.push('/')
    }, [])

    useEffect(() => {
        checkLogin(dispatch)
    }, [dispatch])

    if (error) return ERROR
    if (loading) return LOADING
    if (!data) return null;

    return (
        <HeaderWrapper>
            <UserInfoSection>{data.name}</UserInfoSection>
            <UserInfoSection><button onClick={handleLogout}>로그아웃</button></UserInfoSection>
        </HeaderWrapper>
    )
}

export default Header