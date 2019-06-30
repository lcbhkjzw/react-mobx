import * as React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store";
import { routers } from "./router";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        {routers.map((item, index) => {
          return <Route key={index} {...item} />;
        })}
      </Router>
    </Provider>
  );
}
