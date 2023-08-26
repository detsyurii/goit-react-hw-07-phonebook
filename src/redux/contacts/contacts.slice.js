import { createSlice } from '@reduxjs/toolkit';

import { contactsInitState } from './contacts.init-state';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
