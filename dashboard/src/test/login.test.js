import LoginContainer from '../containers/auths/Login'
import React from 'react'
import { render ,fireEvent} from '@testing-library/react'


test('Login snapshot' , ()=>{
    const utils = render(<LoginContainer/>)
    expect(utils.container).toMatchSnapshot()
})

test('Login input id', ()=>{
    const {container} =render(<LoginContainer/>)
    const input_id = container.querySelectorAll('input')[0];
    const event = {
        target : {
            value : "hello",
            name : "name"
        }
    }
    fireEvent.change(input_id,event)
    expect(input_id).toHaveValue('hello');
    expect(input_id).not.toHaveValue('');
})

test('login input password',()=>{
    const {container} =render (<LoginContainer/>)
    const input_password = container.querySelectorAll("input")[1];
    const event = {
        target :{
            value : "world",
            name : "password"
        }
    }
    fireEvent.change(input_password, event)
    expect(input_password).toHaveValue('world');
    expect(input_password).not.toHaveValue('');
})