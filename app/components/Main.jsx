var React = require('react');
var Navigation = require('Navigation');

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>Main Component</h2>
      </div>
    );
  }
}

module.exports = Main;