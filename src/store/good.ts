import { Action, Reducer } from "redux";

import { takeEvery } from 'redux-saga/effects'

export const INSERT_GOOD = "good_insert_good";

interface GoodAction extends Action {
  type: typeof INSERT_GOOD;
  payload: string;
}

const initState = {
  hello: "world",
  yes: "good"
};

type InitState = typeof initState;

export const goodReducer: Reducer<InitState, GoodAction> = (
  state: InitState = initState,
  action
): InitState => {
  switch (action.type) {
    case INSERT_GOOD:
      return {
        ...state,
        hello: action.payload
      };
    default:
      return state;
  }
};

export function* helloSaga() {
  console.log('Hello Sagas!')
  return void 0
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  yield delay(1000)
  console.log('hello')
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(INSERT_GOOD, incrementAsync)
}

