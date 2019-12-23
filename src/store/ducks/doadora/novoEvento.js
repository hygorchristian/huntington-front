import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  novoEventoSaveRequest: ['data'],
  novoEventoSaveSuccess: ['message'],
  novoEventoSaveFailure: ['error'],
});

export const NovoEventoTypes = Types;
export const NovoEventoActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  message: null,
  loading: false,
  error: null,
});

// Reducer Functions

const novoEventoSaveRequest = (state) => ({
 ...state, loading: true, error: null, message: null
});
const novoEventoSaveSuccess = (state, { message }) => ({
  ...state, message, loading: false, error: null
});
const novoEventoSaveFailure = (state, { error }) => ({
 ...state, error, loading: false
});

// Reducer

export const NovoEventoReducer = createReducer(INITIAL_STATE, {
  [Types.NOVO_EVENTO_SAVE_REQUEST]: novoEventoSaveRequest,
  [Types.NOVO_EVENTO_SAVE_SUCCESS]: novoEventoSaveSuccess,
  [Types.NOVO_EVENTO_SAVE_FAILURE]: novoEventoSaveFailure,
});
