import React from 'react';

const Header = props => {
  const { brandName } = props;
  return (
    <div>
      <h1>{brandName}</h1>
    </div>
  )
}

export default Header;