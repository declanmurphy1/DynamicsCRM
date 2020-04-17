import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import clientReducer from "./clientReducer";
import backlogReducer from "./backlogReducer";

export default combineReducers({
  errors: errorReducer,
  client: clientReducer,
  backlog: backlogReducer
});
