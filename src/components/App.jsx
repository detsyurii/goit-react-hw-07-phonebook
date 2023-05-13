import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';
import { Form } from './Form/Form';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useLocalStorage } from './hooks/useLocalStorage';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initContacts);

  const [filter, setFilter] = useState('');

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) || initContacts;
  // });

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleSubmit = (name, number) => {
    const verifiedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (!verifiedContact) {
      setContacts(prevContacts => [
        ...prevContacts,
        { id: nanoid(), name, number },
      ]);
    } else {
      return alert(`Contact ${name} already exists`);
    }
  };

  const changeFilter = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const newContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <Form onSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList contacts={newContacts} onDelete={handleDelete} />
      </div>
    </>
  );
};
