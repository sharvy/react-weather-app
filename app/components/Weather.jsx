var React           = require('react');
var WeatherForm     = require('WeatherForm');
var WeatherMessage  = require('WeatherMessage');
var OpenWeatherMap  = require('OpenWeatherMap');

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    var that = this;
    this.setState({
      isLoading: true
    });

    OpenWeatherMap.getTemp(location).then(function(temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      alert(errorMessage);
      that.setState({
        isLoading: false
      });
    });
  }

  render() {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>Weather Component!</h3>
        <WeatherForm handleSearch={this.handleSearch}/>
        { renderMessage() }
      </div>
    );
  }
}

module.exports = Weather;