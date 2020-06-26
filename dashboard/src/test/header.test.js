import React from 'react'
import { render } from '@testing-library/react'
import {
    BaseProvider,
    useRegisterState,
    useRegisterDispath,
    login,
    checkLogin,
} from 'contexts/BaseContext'
import HeaderComponent from 'components/commons/header'

describe('<Header/>', () => {
    it('render', () => {
        const utils = render(<BaseProvider><HeaderComponent /></BaseProvider>)

    })
})