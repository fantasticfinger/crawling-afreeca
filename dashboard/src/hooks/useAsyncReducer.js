import { useReducer, useEffect } from 'react';

function useAsyncReducer(initState, reducer, callback, ...rest) {
    const [state, dispatch] = useReducer(reducer, initState);

    const fetchData = (...rest) => {
        callback(dispatch, ...rest);
    };
    useEffect(() => {
        fetchData(...rest);
    }, [...rest]);

    return [state];
}

export default useAsyncReducer;
