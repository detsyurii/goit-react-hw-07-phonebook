import { createSlice } from '@reduxjs/toolkit';
import { filterInitState } from './filter.init-state';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    filterContacts: (_, action) => {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
