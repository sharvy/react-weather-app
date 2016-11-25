import React from 'react';
import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <h2>Main Component Changed!!</h2>
      {props.children}
    </div>
  );
};

export default Main;