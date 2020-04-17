import axios from "axios";


export const addOpportunity = (backlog_id, opportunity, history) => async dispatch => {

    await axios.post(`http://localhost:8080/api/backlog/${backlog_id}`, opportunity);
    history.push(`/opportunityBoard/${backlog_id}`);
};