import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <p>The temperature is {temp} in {location}</p>
    </div>
  );
};

export default WeatherMessage;