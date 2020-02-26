import { SET_USER } from "./../actions/actionTypes";

const defaultState = {};

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default userReducer;
