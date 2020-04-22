import axios from "axios";
import { GET_CLIENT_NAMES, GET_OPEN_OPPS, GET_ERRORS} from "./types";

export const getClientNames = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/dashboard/client_name`
      );
      dispatch({
        type: GET_CLIENT_NAMES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };

  export const getOpenOpps = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/dashboard/open_opps`
      );
      dispatch({
        type: GET_OPEN_OPPS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    }
  };