import React, { Component } from 'react';
// import './App.css';
import fire from '../fire';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount(){
      let query = fire.database().ref("data/garden").orderByKey();
      let This = this;
      query.once("value")
        .then(function(snapshot) {
          // console.log(snapshot.val());
          let data = [];
          snapshot.forEach(function(childSnapshot) {
            console.log('key: ' + childSnapshot.key);
            // childData will be the actual contents of the child
            console.log(childSnapshot.val());
            // data[childSnapshot.key].val = childSnapshot.val();
            // data[childSnapshot.key].name = childSnapshot.nazwa;
            data.push({
              key: childSnapshot.key,
              name: childSnapshot.val().nazwa,
              map: childSnapshot.val().map,
              plants: childSnapshot.val().plants
            });
          });
          This.setState({data: data});
        });
  }


  render(){
    let stateData = this.state.data;
    const data = stateData.map((x, i) => {
      return (
        <div key={i} className="garden-plant">
          <h3> {x.key} </h3>
        </div>
      )
    });

    return(
      <div className='Garden'>
        {data}
      </div>
    );
  }

}

export default App;
