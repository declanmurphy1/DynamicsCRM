import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
  errors: errorReducer,
  client: clientReducer
});
