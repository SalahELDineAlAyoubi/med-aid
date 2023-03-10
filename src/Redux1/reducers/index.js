import { combineReducers } from "redux";

import authReducer from "./authReducer";
 import postReducer from "./postReducer";
 import userReducer from "./userReducer";
 import requestReducer from "./requestReducer";

export const reducers = combineReducers({
  postReducer,
  authReducer,
  userReducer,
  requestReducer,
});
