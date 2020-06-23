import React, { useEffect, useCallback } from 'react';
import useInput from 'hooks/useInput';
import { useHistory } from 'react-router-dom';
import {
  login,
  useRegisterDispath,
  useRegisterState,
} from 'contexts/BaseContext';
import AuthButton from '../commons/authButton';
import AuthInput from '../commons/authInput';

function Login() {
  const [{ name, password }, onChange] = useInput({
    name: '',
    password: '',
  });
  const state = useRegisterState();
  const { data } = state.register;
  const dispatch = useRegisterDispath();
  const history = useHistory();
  const handleSubmit = () => {
    login(dispatch, { name, password });
  };
  const handleEnterDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (data && data.logged) {
      history.push('/main/home');
    }
  }, [data, history]);

  const handleSign = useCallback(() => {
    history.push('/sign');
  }, [history]);
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
