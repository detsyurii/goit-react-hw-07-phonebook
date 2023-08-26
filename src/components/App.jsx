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

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

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

  const newContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <Form onSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />

        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {contacts && (
          <ContactList contacts={newContacts} onDelete={handleDelete} />
        )}
      </div>
    </>
  );
};
