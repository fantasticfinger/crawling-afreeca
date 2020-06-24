import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
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
  function setUp() {
    const utils = render(
      <BaseProvider>
        <LoginComponent />
      </BaseProvider>,
    );
    const { getByPlaceholderText, getByText } = utils;
    const idInput = getByPlaceholderText('아이디');
    const passwordInput = getByPlaceholderText('비밀번호');
    const loginButton = getByText('로그인');
    const signButton = getByText('회원가입');

    return {
      ...utils,
      idInput,
      passwordInput,
      loginButton,
      signButton,
    };
  }
  it('inputs render', () => {
    const { idInput, passwordInput, loginButton, signButton } = setUp();
    expect(idInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
    expect(signButton).toBeTruthy();
  });
  it('change input', () => {
    const { idInput, passwordInput } = setUp();

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
    const { idInput, loginButton } = setUp();
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
    const { signButton } = setUp();

    await act(async () => {
      fireEvent.click(signButton);
    });
    expect(mocks).toBeCalledTimes(1);
  });
});
