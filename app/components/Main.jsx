import React from 'react';
import Navigation from 'Navigation';

var Main = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Main;