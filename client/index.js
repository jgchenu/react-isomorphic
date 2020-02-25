import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { loadableReady } from "@loadable/component";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "../src/routes";
import { Provider } from "react-redux";
import { getStore } from "../src/redux";
import "./../src/common/styles/basic.less";

const store = getStore();
const App = () => {
  return (
    <Provider store={store}>
      <Router>{renderRoutes(routes)}</Router>
    </Provider>
  );
};

const WrapApp = hot(App);

loadableReady(() => {
  ReactDOM.hydrate(<WrapApp />, document.getElementById("root"));
});
