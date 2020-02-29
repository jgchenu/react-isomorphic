import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import React from "react";

import Root from "./App";
import { Redirect } from "react-router-dom";

function RedirectComp() {
  return <Redirect to="/login" />;
}
const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      {
        path: "/login",
        component: Login
      },
      {
        path: "/redirect",
        component: RedirectComp
      },
      {
        path: "*",
        component: NotFound
      }
    ]
  }
];

export default routes;
