import axios from "axios";
import { GET_ERRORS } from "./types";

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
