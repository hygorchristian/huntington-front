import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  eventoLoadRequest: ['id', 'search'],
  eventoLoadSuccess: ['data'],
  eventoLoadFailure: ['error'],
});

export const EventoTypes = Types;
export const EventoActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  error: null,
});

// Reducer Functions

const eventoLoadRequest = (state) => ({ ...state, loading: true, error: null });
const eventoLoadSuccess = (state, { data }) => ({
  ...state, data, loading: false, error: null
});
const eventoLoadFailure = (state, { error }) => ({
 ...state, error, loading: false
});

// Reducer

export const EventoReducer = createReducer(INITIAL_STATE, {
  [Types.EVENTO_LOAD_REQUEST]: eventoLoadRequest,
  [Types.EVENTO_LOAD_SUCCESS]: eventoLoadSuccess,
  [Types.EVENTO_LOAD_FAILURE]: eventoLoadFailure,
});
