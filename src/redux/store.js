import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { contactsReducer } from './contacts/contacts.reducer';
import { filterReducer } from './filter/filter.reducer';
import { contactsInitState } from './contacts/contacts.init-state';
import { filterInitState } from './filter/filter.init-state';

const enhancer = devToolsEnhancer();

const initState = {
  contacts: contactsInitState.contacts,
  filter: filterInitState.filter,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, initState, enhancer);
