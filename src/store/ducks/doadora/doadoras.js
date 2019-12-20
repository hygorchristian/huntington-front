import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  doadorasLoadRequest: null,
  doadorasLoadSuccess: ['data'],
  doadorasLoadFailure: ['error'],
});

export const DoadorasTypes = Types;
export const DoadorasActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  error: null,
});

// Reducer Functions

const doadorasLoadRequest = (state) => ({ ...state, loading: true, error: null });
const doadorasLoadSuccess = (state, { data }) => ({
  ...state, data, loading: false, error: null
});
const doadorasLoadFailure = (state, { error }) => ({
 ...state, error, loading: false
});

// Reducer

console.tron.log('type', Types.DOADORAS_LOAD_REQUEST);

export const DoadorasReducer = createReducer(INITIAL_STATE, {
  [Types.DOADORAS_LOAD_REQUEST]: doadorasLoadRequest,
  [Types.DOADORAS_LOAD_SUCCESS]: doadorasLoadSuccess,
  [Types.DOADORAS_LOAD_FAILURE]: doadorasLoadFailure,
});
