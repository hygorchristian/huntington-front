import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  authLoadRequest: null,
  authLoadSuccess: ['user'],
  authLoadFailure: ['error'],
  setRole: ['role'],
  logout: null,
});

export const AuthTypes = Types;
export const AuthActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  isAuth: false,
  token: null,
  loading: false,
  error: null
});

// Reducer Functions

const authLoadRequest = (state) => ({ ...state, loading: true, error: null });
const authLoadSuccess = (state, { user }) => ({
  ...state, isAuth: true, user, loading: false, error: null
});
const authLoadFailure = (state, { error }) => ({
 ...state, error, loading: false, isAuth: false, token: null, role: null,
});

const setRole = (state, { role }) => ({
 ...state, role
});

const logout = () => INITIAL_STATE;

// Reducer

export const AuthReducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_LOAD_REQUEST]: authLoadRequest,
  [Types.AUTH_LOAD_SUCCESS]: authLoadSuccess,
  [Types.AUTH_LOAD_FAILURE]: authLoadFailure,
  [Types.SET_ROLE]: setRole,
  [Types.LOGOUT]: logout,
});
