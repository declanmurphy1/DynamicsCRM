import axios from "axios";
import { GET_ERRORS, GET_BACKLOG, GET_OPPORTUNITY, DELETE_OPPORTUNITY } from "./types";

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

export const getOpportunity = (backlog_id, opp_id, history) => async dispatch => {
try {
  const res = await axios.get(`http://localhost:8080/api/backlog/${backlog_id}/${opp_id}`)
  dispatch({
    type: GET_OPPORTUNITY,
    payload: res.data
  })
} catch (err) {
  history.push("/dashboard");
}
}

export const updateOpportunity = (backlog_id, opp_id, opportunity, history) => async dispatch => {
  try {
    await axios.patch(`http://localhost:8080/api/backlog/${backlog_id}/${opp_id}`, opportunity)
    history.push(`/opportunityBoard/${backlog_id}`)
    dispatch({
      type: GET_ERRORS,
      payload: {}
    })
  } catch (err){

    dispatch({
      type: GET_ERRORS,
      payload:err.response.data
    })

  }
}

export const deleteOpportunity = (backlog_id, opp_id) => async dispatch => {
  if(window.confirm(`Click OK to delete Opportunity ${opp_id}`)){
    await axios.delete(`http://localhost:8080/api/backlog/${backlog_id}/${opp_id}`)
    dispatch({
      type: DELETE_OPPORTUNITY,
      payload: opp_id
    })
  }


}
