import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  static loadProps(params, cb) {
    fetch('http://localhost:9901/time', {
      // headers: { 'x-csrf-token': this.props.csrfToken },
    })
    .then((result) => result.json())
    .then((res) => {
      cb(null, { info: res.time });
    });
  }

  render() {
    return (
      <div className="main">
        <header>
          <h1><a href="/">React SSR Sample</a></h1>
          <p>{this.props.info}</p>
          <Link to="/leaf">leaf</Link>
        </header>
      </div>
    );
  }
}

// Main.propTypes = {
//   time: React.PropTypes.number,
//   csrfToken: React.PropTypes.string.isRequired,
// };

export default Main;
