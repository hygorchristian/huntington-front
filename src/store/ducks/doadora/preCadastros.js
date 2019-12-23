import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  preCadastrosLoadRequest: null,
  preCadastrosLoadSuccess: ['data'],
  preCadastrosLoadFailure: ['error'],
});

export const PreCadastrosTypes = Types;
export const PreCadastrosActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  list: [],
  loading: false,
  error: null,
});

// Reducer Functions

const preCadastrosLoadRequest = (state) => ({ ...state, loading: true, error: null });
const preCadastrosLoadSuccess = (state, { data }) => ({
  ...state, data, loading: false, error: null
});
const preCadastrosLoadFailure = (state, { error }) => ({
 ...state, error, loading: false
});

// Reducer

export const PreCadastrosReducer = createReducer(INITIAL_STATE, {
  [Types.PRE_CADASTROS_LOAD_REQUEST]: preCadastrosLoadRequest,
  [Types.PRE_CADASTROS_LOAD_SUCCESS]: preCadastrosLoadSuccess,
  [Types.PRE_CADASTROS_LOAD_FAILURE]: preCadastrosLoadFailure,
});
