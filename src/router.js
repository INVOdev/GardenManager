import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Gardian from './js/Gardian';
import LoginPage from './js/containers/LoginPage';



class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact strict path="/" component={Gardian} />
          <Route exact path="/loginPage" component={LoginPage} />
          <Route exact component={LoginPage} />
        </div>
      </Router>
    );
  }
}
export default Routing;
