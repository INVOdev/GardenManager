import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      showText: true,
      messages: []
    };
  }
  componentWillMount(){
    // Loop through users in order with the forEach() method. The callback
  // provided to forEach() will be called synchronously with a DataSnapshot
  // for each child:
  console.log('get data');
  var query = fire.database().ref("data/garden").orderByKey();
  query.once("value")
    .then(function(snapshot) {
      // console.log(snapshot.val());
      snapshot.forEach(function(childSnapshot) {
        console.log('key: ' + childSnapshot.key);
        // childData will be the actual contents of the child
        console.log(childSnapshot.val());
      });
    });
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
      </div>
    );
  }
}

export default App;
