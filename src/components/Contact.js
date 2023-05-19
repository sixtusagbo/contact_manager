import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Contact extends Component {
  state = {};

  onShowClick = (name, e) => {
    console.log(name);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <i
            onClick={this.onShowClick.bind(this, name)}
            className="fas fa-sort-down"
          ></i>
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
