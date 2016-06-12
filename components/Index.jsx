import React from 'react';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';

class Index extends React.Component {
  static loadProps(params, cb) {
    const apiEndpoint = params.loadContext ? params.loadContext.apiEndpoint : window.apiEndpoint;
    const csrfToken = params.loadContext ? params.loadContext.csrfToken : window.csrfToken;
    fetch(`${apiEndpoint}/api/time`, {
      headers: { 'x-csrf-token': csrfToken },
    })
    .then((result) => result.json())
    .then((res) => {
      cb(null, { time: res.time });
    });
  }

  render() {
    return (
      <div className="index">
        <p>{this.props.time}</p>
        <Link to="/leaf">leaf</Link>
      </div>
    );
  }
}

Index.propTypes = {
  time: React.PropTypes.number,
};

export default Index;
