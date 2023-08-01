import { createReducer } from '@reduxjs/toolkit';

import { filterInitState } from './filter.init-state';
import { filterContacts } from './filter.actions';

export const filterReducer = createReducer(filterInitState, builder => {
  builder.addCase(filterContacts, (_, action) => {
    return action.payload;
  });
});
