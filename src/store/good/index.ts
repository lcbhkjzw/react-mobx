import { Action, Reducer } from "redux";

export const INSERT_GOOD = "good_insert_good";

const initState = {
  hello: "world"
};

type InitState = typeof initState;

export const goodReducer: Reducer<InitState, Action> = (
  state: InitState = initState,
  action: Action
): InitState => {
  switch (action.type) {
    case INSERT_GOOD:
      return {
        ...state
      };
    default:
      return state;
  }
};
