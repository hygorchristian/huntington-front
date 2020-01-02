import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types

const Types = {
  CONTROLES_REQUEST: 'CONTROLES_REQUEST_F0913CDA9BD0C377',
  CONTROLES_SUCCESS: 'CONTROLES_SUCCESS_F0913CDA9BD0C377',
  CONTROLES_FAILURE: 'CONTROLES_FAILURE_F0913CDA9BD0C377',
};

// Action & Creators

const { Creators } = createActions({
  controlesRequest: null,
  controlesSuccess: ['data'],
  controlesFailure: ['error'],
});

export const ControlesTypes = Types;
export const ControlesActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

// Reducer Functions

const controlesRequest = (state) => ({ ...state, loading: true, error: null });
const controlesSuccess = (state, { data }) => ({
 ...state, data, loading: false, error: null 
});
const controlesFailure = (state, { error }) => ({ ...state, error, loading: false });

// Reducer

export const ControlesReducer = createReducer(INITIAL_STATE, {
  [Types.CONTROLES_REQUEST]: controlesRequest,
  [Types.CONTROLES_SUCCESS]: controlesSuccess,
  [Types.CONTROLES_FAILURE]: controlesFailure,
});
