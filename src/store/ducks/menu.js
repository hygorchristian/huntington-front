import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  menuSetOpen: ['opened'],
});

export const MenuTypes = Types;
export const MenuActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  opened: true,
});

// Reducer Functions

const menuSetOpen = (state, { opened }) => ({ ...state, opened });

// Reducer

export const MenuReducer = createReducer(INITIAL_STATE, {
  [Types.MENU_SET_OPEN]: menuSetOpen,
});
