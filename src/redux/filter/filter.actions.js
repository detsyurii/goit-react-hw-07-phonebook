import { FILTER_CONTACTS } from './filter.types';

export const filterContacts = filter => ({
  type: FILTER_CONTACTS,
  payload: filter,
});
