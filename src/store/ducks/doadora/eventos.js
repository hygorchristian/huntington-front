import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  eventosLoadRequest: null,
  eventosLoadSuccess: ['list'],
  eventosLoadFailure: ['error'],
});

export const EventosTypes = Types;
export const EventosActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  list: [],
  loading: false,
  error: null,
});

// Reducer Functions

const eventosLoadRequest = (state) => ({ ...state, loading: true, error: null });
const eventosLoadSuccess = (state, { list }) => ({
  ...state, list, loading: false, error: null
});
const eventosLoadFailure = (state, { error }) => ({
 ...state, error, loading: false
});

// Reducer

export const EventosReducer = createReducer(INITIAL_STATE, {
  [Types.EVENTOS_LOAD_REQUEST]: eventosLoadRequest,
  [Types.EVENTOS_LOAD_SUCCESS]: eventosLoadSuccess,
  [Types.EVENTOS_LOAD_FAILURE]: eventosLoadFailure,
});
