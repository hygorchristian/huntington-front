/* eslint-disable */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types, Actions & Creators

const { Creators, Types } = createActions({
  consultaListRequest: null,
  consultaListSuccess: ['data'],
  consultaListFailure: ['error'],
  consultaItemRequest: ['id'],
  consultaItemSuccess: ['data'],
  consultaItemFailure: ['error'],
  consultaCreateRequest: ['data', 'is_first'],
  consultaCreateSuccess: ['data', 'message'],
  consultaCreateFailure: ['error'],
  consultaUpdateRequest: ['id', 'data'],
  consultaUpdateSuccess: ['data', 'message'],
  consultaUpdateFailure: ['error'],

});

export const ConsultaTypes = Types;
export const ConsultaActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  create:{
    data: null,
    message: null,
    loading: false,
    error: null,
  },
  item:{
    data: null,
    loading: false,
    error: null,
  },
  list:{
    data: [],
    loading: false,
    error: null,
  },
  update:{
    data: null,
    message: null,
    loading: false,
    error: null,
  },

});

// Reducer Functions

const consultaCreateRequest = state => ({ ...state, create: { loading: true, error: null } });
const consultaCreateSuccess = (state, { data, message }) => ({ ...state, create: {data, message, loading: false, error: null}});
const consultaCreateFailure = (state, { error }) => ({ ...state, create: { error, loading: false } });
const consultaItemRequest = state => ({ ...state, item: { loading: true, error: null }});
const consultaItemSuccess = (state, { data }) => ({ ...state, item: { data, loading: false, error: null}});
const consultaItemFailure = (state, { error }) => ({ ...state, item: { error, loading: false }});
const consultaListRequest = state => ({ ...state, list: { loading: true, error: null }});
const consultaListSuccess = (state, { data }) => ({ ...state, list: { data, loading: false, error: null }});
const consultaListFailure = (state, { error }) => ({ ...state, list: { error, loading: false }});
const consultaUpdateRequest = state => ({ ...state, update: { loading: true, error: null }});
const consultaUpdateSuccess = (state, { data, message }) => ({ ...state, update: { data, message, loading: false, error: null }});
const consultaUpdateFailure = (state, { error }) => ({ ...state, update: { error, loading: false, message: false }});

// Reducer

export const ConsultaReducer = createReducer(INITIAL_STATE, {
  [Types.CONSULTA_LIST_REQUEST]: consultaListRequest,
  [Types.CONSULTA_LIST_SUCCESS]: consultaListSuccess,
  [Types.CONSULTA_LIST_FAILURE]: consultaListFailure,
  [Types.CONSULTA_ITEM_REQUEST]: consultaItemRequest,
  [Types.CONSULTA_ITEM_SUCCESS]: consultaItemSuccess,
  [Types.CONSULTA_ITEM_FAILURE]: consultaItemFailure,
  [Types.CONSULTA_CREATE_REQUEST]: consultaCreateRequest,
  [Types.CONSULTA_CREATE_SUCCESS]: consultaCreateSuccess,
  [Types.CONSULTA_CREATE_FAILURE]: consultaCreateFailure,
  [Types.CONSULTA_UPDATE_REQUEST]: consultaUpdateRequest,
  [Types.CONSULTA_UPDATE_SUCCESS]: consultaUpdateSuccess,
  [Types.CONSULTA_UPDATE_FAILURE]: consultaUpdateFailure,

});
