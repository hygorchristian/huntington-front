import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

//Types

const Types = {
  CRIAR_CONTROLE_REQUEST: 'CRIAR_CONTROLE_REQUEST_4DF35A49F1A4FB6E',
  CRIAR_CONTROLE_SUCCESS: 'CRIAR_CONTROLE_SUCCESS_4DF35A49F1A4FB6E',
  CRIAR_CONTROLE_FAILURE: 'CRIAR_CONTROLE_FAILURE_4DF35A49F1A4FB6E',
}

// Action & Creators

const { Creators } = createActions({
  criarControleRequest: null,
  criarControleSuccess: ['data'],
  criarControleFailure: ['error'],
});

export const CriarControleTypes = Types;
export const CriarControleActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

// Reducer Functions

const criarControleRequest = state => ({ ...state, loading: true, error: null });
const criarControleSuccess = (state, { data }) => ({ ...state, data, loading: false, error: null});
const criarControleFailure = (state, { error }) => ({ ...state, error, loading: false });

// Reducer

export const CriarControleReducer = createReducer(INITIAL_STATE, {
  [Types.CRIAR_CONTROLE_REQUEST]: criarControleRequest,
  [Types.CRIAR_CONTROLE_SUCCESS]: criarControleSuccess,
  [Types.CRIAR_CONTROLE_FAILURE]: criarControleFailure,
});
