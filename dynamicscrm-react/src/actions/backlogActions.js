import axios from "axios";
import { GET_ERRORS } from "./types";


export const addOpportunity = (backlog_id, opportunity, history) => async dispatch => {

    try{
        await axios.post(`http://localhost:8080/api/backlog/${backlog_id}`, opportunity);
        history.push(`/opportunityBoard/${backlog_id}`);
        dispatch({
            type: GET_ERRORS,
            payload: {}
          });
    } catch(err){
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
          });
    } 
};