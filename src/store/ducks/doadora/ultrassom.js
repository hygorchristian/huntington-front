/* eslint-disable */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Types, Actions & Creators

const { Creators, Types } = createActions({
  ultrassomItemRequest: ['id'],
  ultrassomItemSuccess: ['data'],
  ultrassomItemFailure: ['error'],

  ultrassomCreateRequest: ['data'],
  ultrassomCreateSuccess: ['data', 'message'],
  ultrassomCreateFailure: ['error'],

  ultrassomUpdateRequest: ['id', 'data'],
  ultrassomUpdateSuccess: ['data', 'message'],
  ultrassomUpdateFailure: ['error'],

});

export const UltrassomTypes = Types;
export const UltrassomActions = Creators;

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
  update:{
    data: null,
    message: null,
    loading: false,
    error: null,
  },

});

// Reducer Functions

const ultrassomCreateRequest = state => ({ ...state, create: { loading: true, error: null } });
const ultrassomCreateSuccess = (state, { data, message }) => ({ ...state, create: {data, message, loading: false, error: null}});
const ultrassomCreateFailure = (state, { error }) => ({ ...state, create: { error, loading: false } });
const ultrassomItemRequest = state => ({ ...state, item: { loading: true, error: null }});
const ultrassomItemSuccess = (state, { data }) => ({ ...state, item: { data, loading: false, error: null}});
const ultrassomItemFailure = (state, { error }) => ({ ...state, item: { error, loading: false }});
const ultrassomUpdateRequest = state => ({ ...state, update: { loading: true, error: null }});
const ultrassomUpdateSuccess = (state, { data, message }) => ({ ...state, update: { data, message, loading: false, error: null }});
const ultrassomUpdateFailure = (state, { error }) => ({ ...state, update: { error, loading: false, message: false }});

// Reducer

export const UltrassomReducer = createReducer(INITIAL_STATE, {
  [Types.ULTRASSOM_ITEM_REQUEST]: ultrassomItemRequest,
  [Types.ULTRASSOM_ITEM_SUCCESS]: ultrassomItemSuccess,
  [Types.ULTRASSOM_ITEM_FAILURE]: ultrassomItemFailure,
  [Types.ULTRASSOM_CREATE_REQUEST]: ultrassomCreateRequest,
  [Types.ULTRASSOM_CREATE_SUCCESS]: ultrassomCreateSuccess,
  [Types.ULTRASSOM_CREATE_FAILURE]: ultrassomCreateFailure,
  [Types.ULTRASSOM_UPDATE_REQUEST]: ultrassomUpdateRequest,
  [Types.ULTRASSOM_UPDATE_SUCCESS]: ultrassomUpdateSuccess,
  [Types.ULTRASSOM_UPDATE_FAILURE]: ultrassomUpdateFailure,

});
