var React           = require('react');
var WeatherForm     = require('WeatherForm');
var WeatherMessage  = require('WeatherMessage');

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Miami',
      temp: 40
    };
  }

  handleSearch(location) {
    this.setState({
      location: location,
      temp: 25
    });
  }

  render() {
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Weather Component!</h3>
        <WeatherForm handleSearch={this.handleSearch.bind(this)}/>
        <WeatherMessage temp={temp} location={location} />
      </div>
    );
  }
}

module.exports = Weather;