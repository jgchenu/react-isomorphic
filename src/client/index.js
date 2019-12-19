import React from "react";
import ReactDOM from "react-dom";
import Routes from "./../Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./../store";
import { loadableReady } from "@loadable/component";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

loadableReady(() => {
  ReactDOM.hydrate(<App />, document.getElementById("root"));
});
