import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

//Types

const Types = {
  TESTE_REQUEST: 'TESTE_REQUEST_43BA1C7A6E35A11A',
  TESTE_SUCCESS: 'TESTE_SUCCESS_43BA1C7A6E35A11A',
  TESTE_FAILURE: 'TESTE_FAILURE_43BA1C7A6E35A11A',
}

// Action & Creators

const { Creators } = createActions({
  testeRequest: null,
  testeSuccess: ['data'],
  testeFailure: ['error'],
});

export const TesteTypes = Types;
export const TesteActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

// Reducer Functions

const testeRequest = state => ({ ...state, loading: true, error: null });
const testeSuccess = (state, { data }) => ({ ...state, data, loading: false, error: null});
const testeFailure = (state, { error }) => ({ ...state, error, loading: false });

// Reducer

export const TesteReducer = createReducer(INITIAL_STATE, {
  [Types.TESTE_REQUEST]: testeRequest,
  [Types.TESTE_SUCCESS]: testeSuccess,
  [Types.TESTE_FAILURE]: testeFailure,
});
