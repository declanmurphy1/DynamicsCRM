import {
    GET_CLIENT_NAMES,
    GET_OPEN_OPPS
  } from "../actions/types";
  
  const initialState = {
    client_names: [],
    open_opps: [],
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_CLIENT_NAMES:
        return {
          ...state,
          client_names: action.payload,
        };
  
      case GET_OPEN_OPPS:
        return {
          ...state,
          open_opps: action.payload,
        };
  
      default:
        return state;
    }
  }