import { renderHook, act } from '@testing-library/react-hooks';
import React, { useState } from 'react';
import axios from 'axios';
import {
  BaseProvider,
  useRegisterState,
  useRegisterDispath,
  login,
} from '../contexts/BaseContext';

jest.mock('axios');

const useTest = () => {
  const state = useRegisterState();
  const dispatch = useRegisterDispath();
  const loginTest = (name, password) => {
    login(dispatch, { name, password });
  };
  return { state, loginTest };
};

test('test', async () => {
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
