import { configureStore } from '@reduxjs/toolkit';

import { contactsInitState } from './contacts/contacts.init-state';
import { filterInitState } from './filter/filter.init-state';
import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';

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
