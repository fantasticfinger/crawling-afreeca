import React, { useContext } from 'react'
import LoginContainer from '../containers/auths/Login'
import { render, fireEvent } from '@testing-library/react'
import { useHistory ,useLocation} from "react-router-dom"
import { act } from 'react-dom/test-utils';
import axios from 'axios'
import BaseContext, { BaseProvider } from '../containers/commons/Base'

jest.mock('axios');

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useLocation : ()=>({
            pathname:'/'
        }),
        useHistory: ()=>({
            push:jest.fn()
        }),
    };
})

function TestUnit({ children }) {
    const { state, actions } = useContext(BaseContext);
    const handleInput = ({ target: { value } }) => {
        actions.setName(value)
    }
    const handleInput2 = () => {
        actions.setLogged(!state.logged)
    }
    return (
        <div>
            <input id='input' onChange={handleInput} value={state.name} />
            <button id='button' onClick={handleInput2} value={state.logged}></button>
            {children}
        </div>
    )
}


test('Login snapshot', () => {
    const utils = render(<LoginContainer />)
    expect(utils.container).toMatchSnapshot()
})

test('Login input id', () => {
    const { container } = render(<LoginContainer />)
    const input_id = container.querySelectorAll('input')[0];
    const event = {
        target: {
            value: "hello",
            name: "name"
        }
    }
    fireEvent.change(input_id, event)
    expect(input_id).toHaveValue('hello');
    expect(input_id).not.toHaveValue('');
})

test('login input password', () => {
    const { container } = render(<LoginContainer />)
    const input_password = container.querySelectorAll("input")[1];
    const event = {
        target: {
            value: "world",
            name: "password"
        }
    }
    fireEvent.change(input_password, event)
    expect(input_password).toHaveValue('world');
    expect(input_password).not.toHaveValue('');
})

test('login submit', async () => {
    let container ; 
    await act(async ()=>{
        container = render(<BaseProvider><LoginContainer><TestUnit/></LoginContainer></BaseProvider>).container;
    })

    const event = {
        target: {
            value: "hello",
            name: "name"
        }
    }
    
    const inputs = container.querySelectorAll('input');
    const buttons = container.querySelectorAll('button');
    axios.post = jest.fn().mockResolvedValue({
        data: {
            logged: true,
            authority: 1,
        }
    })
    fireEvent.change(inputs[0], event)
    await act(async() => {
        fireEvent.click(buttons[0])
    })
    
    expect(inputs[2]).toHaveValue('hello')
    expect(buttons[2]).toHaveValue('true')
})
