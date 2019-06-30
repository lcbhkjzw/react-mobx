import { goodReducer } from "./good";
import { combineReducers, createStore } from "redux";

export const reducers = combineReducers({
  good: goodReducer
})

export const store = createStore(reducers)

const state = store.getState();

export type GlobalState = typeof state;