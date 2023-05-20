import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  const { brandName } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {brandName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact/add" className="nav-link">
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link">
                <i className="fas fa-question"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brandName: 'My App',
};

Header.propTypes = {
  brandName: PropTypes.string.isRequired,
};

export default Header;
