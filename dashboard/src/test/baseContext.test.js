import { renderHook, act } from '@testing-library/react-hooks';
import React from 'react';
import axios from 'axios';
import {
  BaseProvider,
  useRegisterState,
  useRegisterDispath,
  login,
  checkLogin,
} from '../contexts/BaseContext';

jest.mock('axios');

const useTest = () => {
  const state = useRegisterState();
  const dispatch = useRegisterDispath();
  const loginTest = (name, password) => {
    login(dispatch, { name, password });
  };
  const checkLoginTest = () => {
    checkLogin(dispatch);
  };
  return { state, loginTest, checkLoginTest };
};

test('test login', async () => {
  const wrapper = ({ children }) => <BaseProvider>{children}</BaseProvider>;
  const { result, waitForNextUpdate } = renderHook(() => useTest(), {
    wrapper,
  });
  axios.post = jest.fn().mockResolvedValue({
    data: {
      logged: true,
      authority: 1,
      name: 'test',
    },
  });
  act(() => {
    result.current.loginTest('test', '1234');
  });
  await waitForNextUpdate();
  const { data } = result.current.state.register;

  expect(data.logged).toBe(true);
  expect(data.name).toBe('test');
  expect(data.authority).toBe(1);
});

test('test checkLogin', async () => {
  const wrapper = ({ children }) => <BaseProvider>{children}</BaseProvider>;
  const { result, waitForNextUpdate } = renderHook(() => useTest(), {
    wrapper,
  });
  axios.get = jest.fn().mockResolvedValue({
    data: {
      logged: true,
      authority: 1,
      name: 'test',
    },
  });

  act(() => {
    result.current.checkLoginTest();
  });
  await waitForNextUpdate();
  const { data } = result.current.state.register;

  expect(data.logged).toBe(true);
  expect(data.name).toBe('test');
  expect(data.authority).toBe(1);
});
