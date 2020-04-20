import axios from "axios";
import { GET_CONTACTS, GET_ERRORS } from "./types";

export const getContacts = (client_id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8080/api/contact/${client_id}`
    );
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
