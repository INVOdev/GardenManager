import React, { Component } from 'react';
import { Card } from 'antd';

import '../../scss/gardenCard.scss';

class GardenCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render(){
    let content = this.props.content;

    return(
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image gardenCard">
          <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </div>
        <div className="custom-card">
          <h3>{content.key}</h3>
          <p> {content.name} </p>
          <div> {content.map} </div>
          <div> {content.plants} </div>
        </div>
      </Card>
    );
  }
}

export default GardenCard;
