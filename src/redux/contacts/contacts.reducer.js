import { createReducer } from '@reduxjs/toolkit';

import { contactsInitState } from './contacts.init-state';
import { addContact, deleteContact } from './contacts.actions';

export const contactsReducer = createReducer(contactsInitState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      return [...state, action.payload];
      // state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});
