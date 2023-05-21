import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitNewContact } from '../../reducers/contactsSlice';
import TextInputGroup from '../layout/TextInputGroup';

const AddContact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const { name, email, phone } = contact;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const [addRequestError, setAddRequestError] = useState('');

  const onChange = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async e => {
    e.preventDefault();
    const { name, email, phone } = contact;

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

    const newContact = {
      name,
      email,
      phone,
    };

    // Submit Contact
    try {
      setAddRequestStatus('pending');
      await dispatch(submitNewContact(newContact)).unwrap();
    } catch (error) {
      setAddRequestError(`Failed to save contact: error`);
      setAddRequestStatus('failed');
    }

    // Clear state
    setContact({
      name: '',
      email: '',
      phone: '',
    });
    setErrors({});

    navigate('/');
  };

  return (
    <div className="card mb-3 border-warning">
      <div className="card-header bg-warning border-0">
        Add Contact
        {addRequestError && <p className="text-danger">{addRequestError}</p>}
      </div>
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
            value="Add Contact"
            className="btn btn-outline-warning btn-block"
            disabled={addRequestStatus === 'pending'}
          />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
