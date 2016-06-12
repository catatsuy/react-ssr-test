import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.time ? props.time : 'loading ... ',
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    fetch('http://localhost:9901/api.php')
    .then((result) => result.json())
    .then((res) => {
      this.setState({ info: res.time });
    });
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

Main.propTypes = {
  time: React.PropTypes.number,
};

export default Main;
