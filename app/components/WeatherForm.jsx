var React = require('react');

class WeatherForm extends React.Component {
  onChangeLocation(e) {
    e.preventDefault();
    var location = this.refs.location.value;
    this.props.handleSearch(location);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onChangeLocation.bind(this)}>
          <input type="text" ref="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

module.exports = WeatherForm;