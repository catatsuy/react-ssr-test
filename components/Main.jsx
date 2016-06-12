import React from 'react';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';

class Main extends React.Component {
  static loadProps(params, cb) {
    fetch('http://localhost:9901/time', {
      // headers: { 'x-csrf-token': this.props.csrfToken },
    })
    .then((result) => result.json())
    .then((res) => {
      cb(null, { time: res.time });
    });
  }

  render() {
    return (
      <div className="main">
        <header>
          <h1><Link to="/">React SSR Sample</Link></h1>
          <p>{this.props.time}</p>
          <Link to="/leaf">leaf</Link>
        </header>
      </div>
    );
  }
}

Main.propTypes = {
  time: React.PropTypes.number,
//   csrfToken: React.PropTypes.string.isRequired,
};

export default Main;
