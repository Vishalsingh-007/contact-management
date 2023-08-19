// Import action type constants
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./action-types";

// Action creator for adding a new contact
export const AddContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact
});

// Action creator for editing an existing contact
export const EditContact = (contact, id) => ({
    type: EDIT_CONTACT,
    payload: { contact: contact, contactid: id }
});

// Action creator for deleting a contact
export const DeleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
});
