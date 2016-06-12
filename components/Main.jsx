/* eslint react/no-did-mount-set-state: 0 */

import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: 'loading ... ',
    };
  }

  componentDidMount() {
    this.setState({ info: 'loaded!' });
  }

  render() {
    return (
      <div className="main">
        <header>
          <h1><a href="/">React SSR Sample</a></h1>
          <p>{this.state.info}</p>
        </header>
      </div>
    );
  }
}
