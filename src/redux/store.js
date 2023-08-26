import { configureStore } from '@reduxjs/toolkit';

import { contactsInitState } from './contacts/contacts.init-state';
import { filterInitState } from './filter/filter.init-state';
import { contactsReducer } from './contacts/contacts.slice';
import { filterReducer } from './filter/filter.slice';

const initState = {
  contacts: contactsInitState,
  filter: filterInitState,
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  devTools: true,
  preloadedState: initState,
});

// console.log(store);

// const getContactsAction = async dispatch => {
//   dispatch({ type: 'CONTACTS_LOADING' });
//   try {
//     const data = await axios.get(CONTACTS_URL);
//     console.log(data);
//   } catch (error) {}
// };

// getContactsAction()
// const myThunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//     return;
//   }
//   next(action);
// };
