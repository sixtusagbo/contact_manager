import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { addContact } from '../../reducers/contactsSlice';
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

  const onChange = e =>
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
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
      id: uuid(),
      name,
      email,
      phone,
    };

    // Submit Contact
    dispatch(addContact(newContact));

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
      <div className="card-header bg-warning border-0">Add Contact</div>
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
          />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
