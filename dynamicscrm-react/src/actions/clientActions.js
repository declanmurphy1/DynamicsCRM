import axios from "axios";
import { GET_ERRORS, GET_CLIENTS } from "./types";

export const createClient = (client, history) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/api/client", client);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};

export const getClients = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/client/all")
  dispatch({
    type: GET_CLIENTS,
    payload: res.data
  })
}
