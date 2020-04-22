import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import clientReducer from "./clientReducer";
import backlogReducer from "./backlogReducer";
import contactReducer from "./contactReducer";
import dashboardReducer from "./dashboardReducer";

export default combineReducers({
  errors: errorReducer,
  client: clientReducer,
  backlog: backlogReducer,
  contact: contactReducer,
  dashboard: dashboardReducer,
});
