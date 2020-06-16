import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import RoomList from '../pages/rooms'
import axios from 'axios'
import { act } from 'react-dom/test-utils';
import datas from '../datas/RoomList.json'
import {BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom';
const URL = '/main/rooms'

jest.mock('axios')
jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        ...originalModule,
        useParams: () => ({
            page: 1,
            search: undefined
        }),
        useHistory: () => ({
            push: jest.fn()
        }),
    };
})


test('Room List Snapshot', async () => {
    let container;
    axios.get = jest.fn().mockResolvedValue({
        data: datas
    })
    await act(async () => {
        container = render(<BrowserRouter><RoomList /></BrowserRouter>).container
    })
    expect(container).toMatchSnapshot();
})

test('search input', async () => {
    let container;

    await act(async () => {
        container = render(<BrowserRouter><RoomList /></BrowserRouter>).container
    })
    const searchInput = container.querySelector('input')
    const input ={ target: { value: 'test' } }
    await act(async () => {
        fireEvent.change(searchInput,input)
    })
    
    expect(searchInput).toHaveValue('test')

})
