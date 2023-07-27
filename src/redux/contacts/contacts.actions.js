import { nanoid } from 'nanoid';
import { ADD_CONTACT, DELETE_CONTACT } from './contacts.types';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { id: nanoid(), name, number },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});
