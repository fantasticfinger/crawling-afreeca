import React,{useContext} from 'react'
import { render ,fireEvent} from '@testing-library/react'
import BaseContext,{BaseProvider} from '../containers/commons/Base'
test('setName',()=>{
    const {container} = render(<BaseProvider></BaseProvider>)
})