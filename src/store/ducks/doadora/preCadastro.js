/* eslint-disable */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types, Actions & Creators

const { Creators, Types } = createActions({
  preCadastroItemRequest: ['id'],
  preCadastroItemSuccess: ['data'],
  preCadastroItemFailure: ['error'],
  preCadastroUpdateRequest: ['id', 'data'],
  preCadastroUpdateSuccess: ['data', 'message'],
  preCadastroUpdateFailure: ['error'],
});

export const PreCadastroTypes = Types;
export const PreCadastroActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  item:{
    data: null,
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

const preCadastroItemRequest = state => ({ ...state, item: { loading: true, error: null }});
const preCadastroItemSuccess = (state, { data }) => ({ ...state, item: { data, loading: false, error: null}});
const preCadastroItemFailure = (state, { error }) => ({ ...state, item: { error, loading: false }});
const preCadastroUpdateRequest = state => ({ ...state, update: { loading: true, error: null }});
const preCadastroUpdateSuccess = (state, { data, message }) => ({ ...state, update: { data, message, loading: false, error: null }});
const preCadastroUpdateFailure = (state, { error }) => ({ ...state, update: { error, loading: false, message: false }});

// Reducer

export const PreCadastroReducer = createReducer(INITIAL_STATE, {
  [Types.PRE_CADASTRO_ITEM_REQUEST]: preCadastroItemRequest,
  [Types.PRE_CADASTRO_ITEM_SUCCESS]: preCadastroItemSuccess,
  [Types.PRE_CADASTRO_ITEM_FAILURE]: preCadastroItemFailure,
  [Types.PRE_CADASTRO_UPDATE_REQUEST]: preCadastroUpdateRequest,
  [Types.PRE_CADASTRO_UPDATE_SUCCESS]: preCadastroUpdateSuccess,
  [Types.PRE_CADASTRO_UPDATE_FAILURE]: preCadastroUpdateFailure,
});
