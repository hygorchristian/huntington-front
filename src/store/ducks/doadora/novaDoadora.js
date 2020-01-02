import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  novaDoadoraSetData: ['data'],
  novaDoadoraSaveRequest: ['eventID', 'data'],
  novaDoadoraSaveSuccess: ['message'],
  novaDoadoraSaveFailure: ['error'],
});

export const NovaDoadoraTypes = Types;
export const NovaDoadoraActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: null,
  message: null,
  loading: false,
  error: null,
});

// Reducer Functions

const novaDoadoraSaveRequest = (state) => ({
  ...state, loading: true, error: null
});

const novaDoadoraSaveSuccess = (state, { message }) => ({
  ...state, message, loading: false, error: null,
});

const novaDoadoraSaveFailure = (state, { error }) => ({
 ...state, error, loading: false
});

const novaDoadoraSetData = (state, { data }) => ({
 ...state, data
});

// Reducer

export const NovaDoadoraReducer = createReducer(INITIAL_STATE, {
  [Types.NOVA_DOADORA_SAVE_REQUEST]: novaDoadoraSaveRequest,
  [Types.NOVA_DOADORA_SAVE_SUCCESS]: novaDoadoraSaveSuccess,
  [Types.NOVA_DOADORA_SAVE_FAILURE]: novaDoadoraSaveFailure,
  [Types.NOVA_DOADORA_SET_DATA]: novaDoadoraSetData,
});
