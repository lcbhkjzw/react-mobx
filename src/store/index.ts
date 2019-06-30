import { goodReducer } from "./good";
import { combineReducers, createStore } from "redux";

export const reducers = combineReducers({
  good: goodReducer
})

export const store = createStore(reducers)

export type Store = typeof store;