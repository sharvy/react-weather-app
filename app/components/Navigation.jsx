var React = require('react');
var {Link} = require('react-router');

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Navigation Component!
        </h1>
        <Link to="/">Get Weather</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

module.exports = Navigation;