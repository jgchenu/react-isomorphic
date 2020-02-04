import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { loadableReady } from "@loadable/component";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../src/Routes";
import { Provider } from "react-redux";
import store from "../src/store";
import "./../src/common/styles/basic.less";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

const WrapApp = hot(App);

loadableReady(() => {
  ReactDOM.hydrate(<WrapApp />, document.getElementById("root"));
});
