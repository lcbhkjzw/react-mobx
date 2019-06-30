import { Action, Reducer } from "redux";

import { takeEvery } from 'redux-saga/effects'
import { all } from "redux-saga/effects";

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

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  console.log('hello')
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery(INSERT_GOOD, incrementAsync)
}

export function* goodSaga () {
  yield all([
    watchIncrementAsync()
  ])
}

