import React from "react";
import ReactDOM from "react-dom";
import Routes from "./../Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return <BrowserRouter><Routes /></BrowserRouter>;
};

ReactDOM.hydrate(<App />, document.getElementById("root"));
