import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, selectContacts } from '../../reducers/contactsSlice';
import Contact from './Contact';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const contactStatus = useSelector(state => state.contacts.status);
  const contactError = useSelector(state => state.contacts.error);
  const isLoading = contactStatus === 'loading';

  useEffect(() => {
    if (contactStatus === 'idle') {
      dispatch(getContacts());
    }
  }, [contactStatus, dispatch]);

  return (
    <React.Fragment>
      <h1 className="display-5 mb-2">
        <span className="text-warning">Contact</span> List
      </h1>
      {contactError && (
        <h3 className="display-5 text-danger mt-4">🥹 {contactError}</h3>
      )}
      {isLoading && <h3 className="display-5 text-primary mt-4">Loading...</h3>}
      {contacts &&
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </React.Fragment>
  );
};

export default Contacts;
