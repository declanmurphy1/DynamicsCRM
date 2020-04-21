import axios from "axios";
import { GET_CONTACTS, GET_ERRORS, DELETE_CONTACT, GET_CONTACT } from "./types";

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

export const addContact = (client_id, contact, history) => async (dispatch) => {
    try {
        await axios.post(`http://localhost:8080/api/contact/${client_id}`, contact);
        history.push(`/contactBoard/${client_id}`);
        dispatch({
            type: GET_ERRORS,
            payload: {},
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data,
          });
    }
}

export const deleteContact = (contact_id) => async dispatch => {
    if(window.confirm(`Click OK to delete the Contact`)){
      await axios.delete(`http://localhost:8080/api/contact/id/${contact_id}`)
      dispatch({
        type: DELETE_CONTACT,
        payload: contact_id
      })
    }
  }


export const getContact = (contact_id,client_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/contact/id/${contact_id}`)
        dispatch({
            type: GET_CONTACT,
            payload: res.data
          })
    } catch(err) {
        history.push(`/contactBoard/${client_id}`);
    }
}

