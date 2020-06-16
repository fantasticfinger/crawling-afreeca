import AuthButton from 'components/auths/commons/authButton';
import AuthInput from 'components/auths/commons/authInput';
import { useHistory } from 'react-router';
import useInput from 'hooks/useInput.js';
import SignLabel from './signLabel';
import React, { useCallback, useMemo } from 'react';

function SignComponent() {
    const [{ name, password, checkPassword }, onChange] = useInput({
        name: '',
        password: '',
        checkPassword: '',
    });
    let history = useHistory();

    const handleClickSign = useCallback(() => {
        history.push('/');
    }, []);
    const flag = useMemo(() => {
        if (password === '' && checkPassword === password) return undefined;
        return password === checkPassword;
    });

    return (
        <>
            <AuthInput
                placeholder="아이디"
                value={name}
                type="text"
                onChange={onChange}
                name="name"
            />
            <AuthInput
                placeholder="비밀번호"
                value={password}
                type="password"
                onChange={onChange}
                name="password"
            />
            <AuthInput
                placeholder="비밀번호 확인"
                value={checkPassword}
                type="password"
                name="checkPassword"
                onChange={onChange}
            />
            <SignLabel flag={flag} />
            <AuthButton onClick={handleClickSign}>회원가입</AuthButton>
        </>
    );
}

export default SignComponent;
