import React from "react";
import { renderRoutes } from "react-router-config";

function App(props) {
  return props.route ? renderRoutes(props.route.routes) : null;
}

export default App;
