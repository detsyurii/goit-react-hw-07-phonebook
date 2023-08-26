import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { CONTACTS_URL } from 'utils/constants';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get(CONTACTS_URL);
    return data;
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async ({ id, name, number }) => {
    const { data } = await axios.post(CONTACTS_URL, { id, name, number });
    return data;
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`${CONTACTS_URL}/${id}`);
    return data;
  }
);
