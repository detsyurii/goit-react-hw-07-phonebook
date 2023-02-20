import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem contact={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
