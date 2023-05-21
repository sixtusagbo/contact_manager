import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = ({ contact }) => {
  const { name, email, phone, id } = contact;
  const [showContactInfo, setShowContactInfo] = useState(false);

  const onDeleteClick = id => {
    // Delete Contact
    console.log(id);
  };

  return (
    <div className="card card-body mb-3">
      <h4>
        {name}{' '}
        <i
          onClick={() => setShowContactInfo(!showContactInfo)}
          className="fas fa-sort-down"
          style={{ cursor: 'pointer' }}
        ></i>
        <i
          className="fas fa-times"
          style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          onClick={() => onDeleteClick(id)}
        ></i>
        <Link to={`contact/edit/${id}`}>
          <i
            className="fas fa-pencil-alt"
            style={{
              cursor: 'pointer',
              float: 'right',
              color: '#000',
              marginRight: '1rem',
            }}
          ></i>
        </Link>
      </h4>
      {showContactInfo ? (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
