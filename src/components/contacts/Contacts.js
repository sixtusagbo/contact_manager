import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'jdoe@gmail.com',
      phone: '555-555-5555',
    },
    {
      id: 2,
      name: 'Karen Williams',
      email: 'karen@gmail.com',
      phone: '222-222-2222',
    },
    {
      id: 3,
      name: 'Henry Johnson',
      email: 'henry@gmail.com',
      phone: '111-111-1111',
    },
  ]);

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
