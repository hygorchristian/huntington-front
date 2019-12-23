import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  preCadastroLoadRequest: ['url'],
  preCadastroLoadSuccess: ['data'],
  preCadastroLoadFailure: ['error'],
});

export const PreCadastroTypes = Types;
export const PreCadastroActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  lista: null,
  loading: false,
  error: null,
});

// Reducer Functions

const preCadastroLoadRequest = (state) => ({ ...state, loading: true, error: null });
const preCadastroLoadSuccess = (state, { data }) => ({
  ...state, data, loading: false, error: null
});
const preCadastroLoadFailure = (state, { error }) => ({
 ...state, error, loading: false
});

// Reducer

export const PreCadastroReducer = createReducer(INITIAL_STATE, {
  [Types.PRE_CADASTRO_LOAD_REQUEST]: preCadastroLoadRequest,
  [Types.PRE_CADASTRO_LOAD_SUCCESS]: preCadastroLoadSuccess,
  [Types.PRE_CADASTRO_LOAD_FAILURE]: preCadastroLoadFailure,
});
