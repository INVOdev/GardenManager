import React, { Component } from 'react';
import { Col, Card } from 'antd';

import 'antd/lib/card/style/css';
import 'antd/lib/col/style/css';
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
      <Col span={6} xs={24}>
        <div className="gardenCard">
          <Card title={content.key} style={{ width: 300 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>
            <div className="custom-card">
              <p> {content.name} </p>
              <div> {content.map} </div>
              <div> {content.plants} </div>
            </div>
          </Card>
        </div>
      </Col>
    );
  }
}
export default GardenCard;
