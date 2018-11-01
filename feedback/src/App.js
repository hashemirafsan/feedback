import React, { Component } from 'react';
import Routes from './Routes/index';

class App extends Component {
  
  componentWillReceiveProps(props) {
    this.props = props;
  }

  render() {
    return (
      <Routes {...this.props}></Routes>
    );
  }
}

export default App;
