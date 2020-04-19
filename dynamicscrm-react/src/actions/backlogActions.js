import axios from "axios";
import { GET_ERRORS, GET_BACKLOG } from "./types";

export const addOpportunity = (backlog_id, opportunity, history) => async (
  dispatch
) => {
  try {
    await axios.post(
      `http://localhost:8080/api/backlog/${backlog_id}`,
      opportunity
    );
    history.push(`/opportunityBoard/${backlog_id}`);
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getBacklog = (backlog_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/backlog/${backlog_id}`
    );
    dispatch({
      type: GET_BACKLOG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
