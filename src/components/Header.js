import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => {
  const { brandName } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {brandName}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
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
