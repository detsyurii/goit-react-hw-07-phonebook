import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './App.module.css';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { filterContacts } from 'redux/filter/filter.slice';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contacts/contacts.thunk';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';
import { selectFilter } from 'redux/filter/filter.selectors';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleSubmit = (id, name, number) => {
    const verifiedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!verifiedContact) {
      const newContact = {
        id,
        name,
        number,
      };
      dispatch(addContactThunk(newContact));
    } else {
      return alert(`Contact ${name} already exists`);
    }
  };

  const changeFilter = evt => {
    const { value } = evt.currentTarget;
    dispatch(filterContacts(value));
  };

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <>
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <Form onSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {contacts && (
          <ContactList contacts={filteredContacts} onDelete={handleDelete} />
        )}
      </div>
    </>
  );
};
