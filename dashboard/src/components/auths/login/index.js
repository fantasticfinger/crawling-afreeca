import React, { useEffect, useCallback } from 'react';
import AuthInput from '../commons/authInput';
import AuthButton from '../commons/authButton';
import useInput from 'hooks/useInput';
import { useHistory } from 'react-router-dom';
import {
    login,
    useRegisterDispath,
    useRegisterState,
} from 'contexts/BaseContext';

function Login() {
    const [{ name, password }, onChange] = useInput({
        name: '',
        password: '',
    });
    const state = useRegisterState();
    const { data } = state.register;
    const dispatch = useRegisterDispath();
    const history = useHistory();
    const handleEnterDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };
    const handleSubmit = () => {
        login(dispatch, { name, password });
    };
    useEffect(() => {
        if (data && data.logged) {
            history.push('/main/home');
        }
    }, [data]);

    const handleSign = useCallback(() => {
        history.push('/sign');
    }, []);
    return (
        <>
            <AuthInput
                placeholder="아이디"
                type="text"
                value={name}
                onChange={onChange}
                name="name"
                onKeyDown={handleEnterDown}
            />
            <AuthInput
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={onChange}
                name="password"
                onKeyDown={handleEnterDown}
            />
            <AuthButton onClick={handleSubmit}>로 그 인</AuthButton>
            <AuthButton onClick={handleSign}>회원가입</AuthButton>
        </>
    );
}

export default Login;
