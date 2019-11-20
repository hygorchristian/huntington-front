import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Action Types & Creators

const { Types, Creators } = createActions({
  menuSetOpen: ['opened'],
  setItem: ['item']
});

export const MenuTypes = Types;
export const MenuActions = Creators;

// Initial State

export const INITIAL_STATE = Immutable({
  opened: true,
  item: null, // Label do item selecionado no menu
});

// Reducer Functions

const menuSetOpen = (state, { opened }) => ({ ...state, opened });
const setItem = (state, { item }) => ({ ...state, item });

// Reducer

export const MenuReducer = createReducer(INITIAL_STATE, {
  [Types.MENU_SET_OPEN]: menuSetOpen,
  [Types.SET_ITEM]: setItem,

});
