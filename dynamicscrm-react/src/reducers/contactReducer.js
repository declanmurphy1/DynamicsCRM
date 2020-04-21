import {
    GET_CONTACTS,
    GET_CONTACT,
    DELETE_CONTACT,
  } from "../actions/types";
  
  const initialState = {
    contacts: [],
    contact: {},
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_CONTACTS:
        return {
          ...state,
          contacts: action.payload,
        };
  
      case GET_CONTACT:
        return {
          ...state,
          contact: action.payload,
        };
  
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
  
      default:
        return state;
    }
  }