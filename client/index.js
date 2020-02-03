import React from "react";
import ReactDOM from "react-dom";
import Routes from "../src/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store";
import { loadableReady } from "@loadable/component";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

loadableReady(() => {
  ReactDOM.hydrate(<App />, document.getElementById("root"));
});
