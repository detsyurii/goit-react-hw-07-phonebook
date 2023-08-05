import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

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

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// export const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const contactsReducer = contactsSlice.reducer;
