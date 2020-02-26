import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import PropTypes from "prop-types";

App.propTypes = {
  route: PropTypes.object
};

function App(props) {
  return (
    <>
      <Header />
      {props.route ? renderRoutes(props.route.routes) : null}
    </>
  );
}

export default App;
