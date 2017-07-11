import React, { Component } from 'react';
import { Col, Row } from 'antd';

import 'antd/lib/col/style/css';
import 'antd/lib/row/style/css';

import LoginForm from '../components/LoginForm';
import '../../scss/loginPage.scss';

import LoginBackground from '../../img/background-login.jpeg';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {

    return (
      <div className="login-page" style={{backgroundImage: "url(" + LoginBackground + ")"}} >
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
            <div className="login-from">
              <LoginForm />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default LoginPage;
