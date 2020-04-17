import axios from "axios";
import { GET_ERRORS, GET_CLIENTS, GET_CLIENT, DELETE_CLIENT } from "./types";

export const createClient = (client, history) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8080/api/client", client);
    history.push("/dashboard");
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

export const getClients = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/client/all");
  dispatch({
    type: GET_CLIENTS,
    payload: res.data,
  });
};

export const getClient = (id, history) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/client/${id}`);
    dispatch({
      type: GET_CLIENT,
      payload: res.data,
    });
  } catch (error) {
    history.push("/dashboard");
  }
};

export const deleteClient = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Are you sure you want to delete the Client? This will delete all data related to the client."
    )
  ) {
    await axios.delete(`http://localhost:8080/api/client/${id}`);
    dispatch({
      type: DELETE_CLIENT,
      payload: id,
    });
  }
};
