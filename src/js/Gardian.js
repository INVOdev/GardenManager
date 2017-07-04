import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../scss/App.scss';

import GardenList from './components/GardenList'

class Gardian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {

    return (
      <div className="Gardian">
        <div className="Gardian-header">
          <img src={logo} className="Gardian-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Gardian-intro">
          To get started, edit <code>src/Gardian.js</code> and save to reload.
        </p>
        <div>
          <GardenList />
        </div>
      </div>
    );
  }
}

export default Gardian;
