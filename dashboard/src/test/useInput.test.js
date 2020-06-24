import { renderHook, act } from '@testing-library/react-hooks';
import useInput from '../hooks/useInput'

test('useInput', async () => {
    const initState = {
        name: '',
        password: '',
    }
    const { result } = renderHook(() => useInput(initState));
    const [, onChange, reset] = result.current

    act(() => {
        onChange({
            target: {
                name: 'name',
                value: 'test'
            }
        });
        onChange({
            target: {
                name: 'password',
                value: '1234'
            }
        });
    })

    expect(result.current[0].name).toBe('test')
    expect(result.current[0].password).toBe('1234')
    act(() => {
        reset();
    })
    expect(result.current[0].name).toBe('')
    expect(result.current[0].password).toBe('')
})