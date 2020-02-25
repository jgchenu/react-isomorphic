import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user";
const reducer = combineReducers({
  user: userReducer
});

export function getStore() {
  return createStore(reducer, applyMiddleware(thunk));
}
