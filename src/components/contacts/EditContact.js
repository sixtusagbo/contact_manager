import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getContact,
  selectContacts,
  setContactToEdit,
} from '../../reducers/contactsSlice';
import TextInputGroup from '../layout/TextInputGroup';

const EditContact = () => {
  const currentContact = useSelector(state => state.contacts.contactToEdit);
  const { name, email, phone } = currentContact;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const editStatus = useSelector(state => state.contacts.editStatus);
  const contacts = useSelector(selectContacts);
  const isLoading = editStatus === 'loading';
  const dispatch = useDispatch();
  const canMakeRequest = Number(id) <= 10;

  useEffect(() => {
    if (canMakeRequest) {
      // Comes from jsonplaceholder make a request
      dispatch(getContact(id));
    } else {
      // Manually added, just find it
      dispatch(setContactToEdit(contacts.find(contact => contact.id === id)));
    }
  }, [dispatch, id]);

  const onChange = e =>
    dispatch(
      setContactToEdit({
        ...currentContact,
        [e.target.name]: e.target.value,
      })
    );

  const onSubmit = e => {
    e.preventDefault();

    if (name === '') {
      setErrors({ name: 'Name is required' });
      return;
    }

    if (email === '') {
      setErrors({ email: 'Email is required' });
      return;
    }

    if (phone === '') {
      setErrors({ phone: 'Phone is required' });
      return;
    }

    const modifiedContact = {
      name,
      email,
      phone,
    };

    // Update Contact
    if (canMakeRequest) {
      // Comes from jsonplaceholder make a request
    } else {
      // Manually added, just update state
    }

    // Clear state
    dispatch(
      setContactToEdit({
        name: '',
        email: '',
        phone: '',
      })
    );
    setErrors({});

    navigate('/');
  };

  return (
    <>
      {isLoading && <h3 className="display-5 text-primary mt-4">Loading...</h3>}
      {!isLoading && (
        <div className="card mb-3 border-warning">
          <div className="card-header bg-warning border-0">Edit Contact</div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter name..."
                value={name}
                onChange={onChange}
                error={errors.name}
              />
              <TextInputGroup
                label="Email"
                type="email"
                name="email"
                placeholder="Enter email..."
                value={email}
                onChange={onChange}
                error={errors.email}
              />
              <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Enter phone..."
                value={phone}
                onChange={onChange}
                error={errors.phone}
              />

              <input
                type="submit"
                value="Update Contact"
                className="btn btn-outline-warning btn-block"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditContact;
