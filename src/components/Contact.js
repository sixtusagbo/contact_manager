import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={() => this.setState({ showContactInfo: !showContactInfo })}
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          ></i>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
