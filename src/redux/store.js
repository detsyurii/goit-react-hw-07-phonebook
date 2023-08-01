import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';
import { contactsInitState } from './contacts/contacts.init-state';
import { filterInitState } from './filter/filter.init-state';

const initState = {
  contacts: contactsInitState.contacts,
  filter: filterInitState.filter,
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: true,
  preloadedState: initState,
});
