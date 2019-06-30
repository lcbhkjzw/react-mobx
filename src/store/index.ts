import { goodReducer, helloSaga, watchIncrementAsync } from "./good";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";


export const reducers = combineReducers({
  good: goodReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}

sagaMiddleware.run(rootSaga)

const state = store.getState();

export type GlobalState = typeof state;
