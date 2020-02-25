import Home from "./containers/Home";
import Login from "./containers/Login";
import Root from "./App";

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
      }
    ]
  }
];

export default routes;
