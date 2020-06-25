import AuthButton from 'components/auths/commons/authButton';
import AuthInput from 'components/auths/commons/authInput';
import { useHistory } from 'react-router';
import useInput from 'hooks/useInput';
import React, { useCallback, useMemo } from 'react';
import SignLabel from './signLabel';

const SAME_TEXT = '일치합니다.'
const DIFF_TEXT = '불일치합니다.'
function isSamePassword(password, checkPassword) {
  if (password === '' && password === checkPassword) return '';
  if (password === checkPassword) return SAME_TEXT;
  return DIFF_TEXT
}
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
  const labelText = useMemo(() => isSamePassword(password, checkPassword), [password, checkPassword])

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
      <SignLabel labelText={labelText} />
      <AuthButton onClick={handleClickSign}>회원가입</AuthButton>
    </>
  );
}

export default SignComponent;
