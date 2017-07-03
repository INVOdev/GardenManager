import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../scss/App.scss';

import GardenCard from './components/GardenCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <GardenCard />
        </div>
      </div>
    );
  }
}

export default App;
