// Import action type constants
import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from '../action/action-types';

// Initial state of the contact list
const initialState = [];

// Reducer function for managing the contact list
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    // Case for adding a new contact
    case ADD_CONTACT:
      return [...state, action.payload];
      
    // Case for editing an existing contact
    case EDIT_CONTACT:
      const updatedState = state.map((cont) => {
        if (cont.id === action.payload.contactid) {
          cont.name = action.payload.contact.name;
          cont.mobileNumber = action.payload.contact.mobileNumber;
          cont.active = action.payload.contact.active;
        }
        return cont;
      });
      return updatedState;
      
    // Case for deleting a contact
    case DELETE_CONTACT:
      const newState = state.filter((cont) => cont.id !== action.payload);
      return newState;
      
    // Default case to handle unknown actions
    default:
      return state;
  }
};

export default contactReducer;
