import React from 'react';
import SignComponent from 'components/auths/sign';
import { render, act, fireEvent } from '@testing-library/react'

describe('<SignComponent/>', () => {
    function setUp() {
        const utils = render(<SignComponent />)
        const { getByPlaceholderText, getByText } = utils;
        const idInput = getByPlaceholderText('아이디')
        const passwordInput = getByPlaceholderText('비밀번호')
        const passwordCheckInput = getByPlaceholderText('비밀번호 확인')
        const label = getByText('일치합니다')
        const submitButton = getByText('회원가입')

        return {
            ...utils, idInput, passwordInput, passwordCheckInput, label, submitButton
        }
    }
    it('reder check', () => {
        const { idInput, passwordInput, passwordCheckInput, label, submitButton } = setUp();
        expect(idInput).toBeTruthy();
        expect(passwordInput).toBeTruthy();
        expect(passwordCheckInput).toBeTruthy();
        expect(label).toBeTruthy();
        expect(submitButton).toBeTruthy();
    })
    it('change input', () => {
        const { getByText, idInput, passwordInput, passwordCheckInput, label } = setUp();
        fireEvent.change(idInput, {
            target: { value: 'test' }
        })
        fireEvent.change(passwordInput, {
            target: { value: '1234' }
        })
        fireEvent.change(passwordCheckInput, {
            target: { value: '1234' }
        })
        expect(idInput).toHaveAttribute('value', 'test');
        expect(passwordInput).toHaveAttribute('value', '1234');
        expect(passwordInput).toHaveAttribute('value', '1234');
        const changeLabel = getByText('일치합니다')
        expect(changeLabel).toBeTruthy();
        fireEvent.change(passwordCheckInput, {
            target: { value: 'asdasd' }
        })
        expect(getByText('불일치합니다')).toBeTruthy();

    })
})