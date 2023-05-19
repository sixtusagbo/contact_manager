import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => {
  const { brandName } = props;
  return (
    <div>
      <h1 style={headingStyle}>{brandName}</h1>
    </div>
  );
};

Header.defaultProps = {
  brandName: 'My App',
};

Header.propTypes = {
  brandName: PropTypes.string.isRequired,
};

const headingStyle = {
  color: 'green',
  fontSize: '50px',
};

export default Header;
