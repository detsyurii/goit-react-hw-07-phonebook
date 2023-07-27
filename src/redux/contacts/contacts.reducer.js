import { contactsInitState } from './contacts.init-state';
import { ADD_CONTACT, DELETE_CONTACT } from './contacts.types';

export const contactsReducer = (state = contactsInitState.contacts, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);

    default:
      return state;
  }
};
