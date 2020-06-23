import AuthButton from 'components/auths/commons/authButton';
import AuthInput from 'components/auths/commons/authInput';
import { useHistory } from 'react-router';
import useInput from 'hooks/useInput';
import React, { useCallback, useMemo } from 'react';
import SignLabel from './signLabel';

function SignComponent() {
  const [{ name, password, checkPassword }, onChange] = useInput({
    name: '',
    password: '',
    checkPassword: '',
  });
  const history = useHistory();

  const handleClickSign = useCallback(() => {
    history.push('/');
  }, [history]);
  const flag = () => {
    if (password === '' && checkPassword === password) return undefined;
    return password === checkPassword;
  };

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
