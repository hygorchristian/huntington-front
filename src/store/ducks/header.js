import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  headerSetBack: ['back'],
  headerSetNotifications: ['notifications'],
});

export const HeaderTypes = Types;
export const HeaderActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  back: null,
  notifications: {
    count: 3,
    data: []
  },
});

// Reducer Functions

const headerSetBack = (state, { back }) => ({ ...state, back });
const headerSetNotifications = (state, { notifications }) => ({ ...state, notifications });

// Reducer

export const HeaderReducer = createReducer(INITIAL_STATE, {
  [Types.HEADER_SET_BACK]: headerSetBack,
  [Types.HEADER_SET_NOTIFICATIONS]: headerSetNotifications,
});
