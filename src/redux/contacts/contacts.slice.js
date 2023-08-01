import { createSlice } from '@reduxjs/toolkit';
// import { initContacts } from 'components/assets/initContacts';
import { contactsInitState } from './contacts.init-state';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },

    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
