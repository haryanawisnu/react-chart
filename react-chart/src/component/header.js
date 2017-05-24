import React, { Component } from 'react';

import logo from '../style/img/LOGO.png';
import '../style/css/header.css';

class MainComponent extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="Bukalapak" />
          <h2>Welcome to Bukalapak</h2>
        </div>
    );
  }
}

export default MainComponent;
