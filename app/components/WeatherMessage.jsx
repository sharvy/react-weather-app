var React = require('react');

class WeatherMessage extends React.Component {
  render() {
    var {temp, location} = this.props;

    return (
      <div>
        <p>The temperature is {temp} in {location}</p>
      </div>
    );
  }
}

module.exports = WeatherMessage;