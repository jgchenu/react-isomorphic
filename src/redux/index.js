import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/user";
const reducer = combineReducers({
  user: userReducer
});

export function getStore() {
  return createStore(reducer);
}

export function getClientStore() {
  const initData = window.__INITIAL_DATA__;
  return createStore(reducer, initData);
}
