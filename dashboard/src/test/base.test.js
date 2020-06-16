import React,{useContext} from 'react'
import { render ,fireEvent} from '@testing-library/react'
import BaseContext,{BaseProvider} from '../containers/commons/Base'

jest.mock('react-router-dom',()=>({
    useHistory: () => ({
        push: jest.fn(),
    }),
    useLocation:()=>({
        pathname: '/sign'
    })
}))

function TestUnit(){
    const {state,actions} = useContext(BaseContext);
    const handleInput = ({target:{value}})=>{
        actions.setName(value)
    }
    const handleInput2 = ()=>{
        actions.setLogged(!state.logged)
    }
    return (
        <div>
            <input id='input' onChange={handleInput} value ={state.name}/>
            <button id='button' onClick = {handleInput2} value={state.logged}></button>
        </div>
    )
}

test('setName',()=>{
    const {container} = render(<BaseProvider><TestUnit/></BaseProvider>)
    const input = container.querySelector('#input')
    const event = {
        target : {
            value : "hello",
        }
    }
    fireEvent.change(input,event);
    expect(input).toHaveValue('hello')
})
test('logged',()=>{
    const {container} = render(<BaseProvider><TestUnit/></BaseProvider>)
    const button = container.querySelector('#button')
    expect(button).toHaveValue('false')
    fireEvent.click(button);
    expect(button).toHaveValue('true')
})