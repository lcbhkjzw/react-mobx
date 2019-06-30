import * as React from "react";
import { HashRouter as Router } from "react-router-dom";

import MyRouter from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <MyRouter />
      </Router>
    </Provider>
  );
}
