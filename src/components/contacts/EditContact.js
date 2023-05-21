import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextInputGroup from '../layout/TextInputGroup';

const EditContact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const { name, email, phone } = contact;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

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

    const modifiedContact = {
      name,
      email,
      phone,
    };

    // Update Contact

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
    <div className="card mb-3">
      <div className="card-header">Edit Contact</div>
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
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default EditContact;
