import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../reducers/contactsReducer';
import Contact from './Contact';

const Contacts = () => {
  const contacts = useSelector(selectContacts);

  return (
    <React.Fragment>
      <h1 className="display-5 mb-2">
        <span className="text-danger">Contact</span> List
      </h1>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </React.Fragment>
  );
};

export default Contacts;
