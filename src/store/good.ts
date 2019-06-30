import { Action, Reducer } from "redux";

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
