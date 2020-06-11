import React,{useContext} from 'react'
import { render ,fireEvent} from '@testing-library/react'
import BaseContext,{BaseProvider} from '../containers/commons/Base'
const TestPage = ({children})=>{
    return (
        <BaseProvider>
            {children}
        </BaseProvider>
    )
}
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
    const {container} = render(<TestPage><TestUnit/></TestPage>)
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
    const {container} = render(<TestPage><TestUnit/></TestPage>)
    const button = container.querySelector('#button')
    expect(button).toHaveValue('false')
    fireEvent.click(button);
    expect(button).toHaveValue('true')
})