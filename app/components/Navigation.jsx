import React from 'react';
import { Link } from 'react-router';

var Navigation = (props) => {
  return (
    <div>
      <Link to="/">Get Weather</Link> | <Link to="/about">About</Link> | <Link to="/examples">Examples</Link>
    </div>
  );
};

export default Navigation;