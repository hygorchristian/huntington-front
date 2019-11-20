import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  authLoadRequest: null,
  authLoadSuccess: ['token', 'role'],
  authLoadFailure: ['error'],
  setRole: ['role'],
});

export const AuthTypes = Types;
export const AuthActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  isAuth: false,
  token: null,
  loading: false,
  error: null,
  role: null
});

// Reducer Functions

const authLoadRequest = (state) => ({ ...state, loading: true, error: null });
const authLoadSuccess = (state, { token, role }) => {
  console.tron.log(token);

  return ({
    ...state, isAuth: true, token, role, loading: false, error: null
  });
};
const authLoadFailure = (state, { error }) => ({
 ...state, error, loading: false, isAuth: false, token: null, role: null,
});

const setRole = (state, { role }) => ({
 ...state, role
});

// Reducer

export const AuthReducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_LOAD_REQUEST]: authLoadRequest,
  [Types.AUTH_LOAD_SUCCESS]: authLoadSuccess,
  [Types.AUTH_LOAD_FAILURE]: authLoadFailure,
  [Types.SET_ROLE]: setRole,
});
