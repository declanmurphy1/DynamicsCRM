import {
  GET_BACKLOG,
  GET_OPPORTUNITY,
  DELETE_OPPORTUNITY,
} from "../actions/types";

const initialState = {
  opportunities: [],
  opportunity: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...state,
        opportunities: action.payload,
      };

    case GET_OPPORTUNITY:
      return {
        ...state,
        opportunity: action.payload,
      };

    case DELETE_OPPORTUNITY:
      return {
        ...state,
        opportunities: state.opportunities.filter(opportunity => opportunity.clientSequence !== action.payload)
      };

    default:
      return state;
  }
}
