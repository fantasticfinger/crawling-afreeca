import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import LoginComponent from 'components/auths/login';
import { BaseProvider } from 'contexts/BaseContext';

const mocks = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mocks,
  }),
}));

describe('<LoginComponent/>', () => {
  it('inputs render', () => {
    const { getByPlaceholderText, getByText } = render(
      <BaseProvider>
        <LoginComponent />
      </BaseProvider>,
    );
    getByPlaceholderText('아이디');
    getByPlaceholderText('비밀번호');
    getByText('로그인');
    getByText('회원가입');
  });
  it('change input', () => {
    const { getByPlaceholderText } = render(
      <BaseProvider>
        <LoginComponent />
      </BaseProvider>,
    );
    const idInput = getByPlaceholderText('아이디');
    const passwordInput = getByPlaceholderText('비밀번호');

    fireEvent.change(idInput, {
      target: {
        value: 'test',
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: 1234,
      },
    });
    expect(passwordInput).toHaveAttribute('value', '1234');
    expect(idInput).toHaveAttribute('value', 'test');
  });

  it('click login', async () => {
    axios.post = jest.fn();
    const { getByText, getByPlaceholderText } = render(
      <BaseProvider>
        <LoginComponent />
      </BaseProvider>,
    );
    const idInput = getByPlaceholderText('아이디');
    const loginButton = getByText('로그인');
    await act(async () => {
      fireEvent.click(loginButton);
      fireEvent.change(idInput, {
        target: {
          value: 'test',
        },
      });
    });
    expect(axios.post).toBeCalledTimes(1);
  });
  it('click sign', async () => {
    const { getByText } = render(
      <BaseProvider>
        <LoginComponent />
      </BaseProvider>,
    );

    const signButton = getByText('회원가입');
    await act(async () => {
      fireEvent.click(signButton);
    });
    expect(mocks).toBeCalledTimes(1);
  });
});
