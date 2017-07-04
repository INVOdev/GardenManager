import React, { Component } from 'react';
// import './App.css';
import fire from '../fire';

import GardenCard from './GardenCard';
import '../../scss/gardenList.scss';

class GardenList extends Component {
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
    const data = stateData.map((x, i) =>
          <GardenCard key={i} content={x} />
    );

    return(
      <div className='gardenList'>
        {data}
      </div>
    );
  }

}

export default GardenList;
