import React, { useReducer, createContext, useContext } from 'react';
import {
  initActionState,
  createAsyncDispatcher,
  createAsyncHandler,
} from '../asyncActionUtils';
import * as userApis from '../apis/auth';

const initState = {
  register: initActionState,
};

const handler = createAsyncHandler('GET_REGISTER', 'register');

function registerReducer(state, action) {
  switch (action.type) {
    case 'GET_REGISTER':
    case 'GET_REGISTER_SUCCESS':
    case 'GET_REGISTER_ERROR':
      return handler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const RegisterStateContext = createContext(null);
const RegisterDispatchContext = createContext(null);

// eslint-disable-next-line react/prop-types
export function BaseProvider({ children }) {
  const [state, dispatch] = useReducer(registerReducer, initState);
  return (
    <RegisterStateContext.Provider value={state}>
      <RegisterDispatchContext.Provider value={dispatch}>
        {children}
      </RegisterDispatchContext.Provider>
    </RegisterStateContext.Provider>
  );
}

export function useRegisterState() {
  const state = useContext(RegisterStateContext);

  if (!state) throw new Error('존재하지 않는 CONTEXT API');
  return state;
}

export function useRegisterDispath() {
  const dispath = useContext(RegisterDispatchContext);
  if (!dispath) throw new Error('존재하지 않는 CONTEXT API');
  return dispath;
}

export const checkLogin = createAsyncDispatcher(
  'GET_REGISTER',
  userApis.checkLogin,
);
export const login = createAsyncDispatcher('GET_REGISTER', userApis.login);
