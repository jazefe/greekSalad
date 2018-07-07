import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Divider } from 'antd';
// import axios from 'axios';
import { EthereumIcon } from '../Web3/EthereumIcon';
import { HomeMiddleBanner } from './HomeMiddleBanner';

class Home extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      console.log(`make a GET to the API sending id: ${this.props.id}`);
    }
  }

  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <div>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <HomeMiddleBanner />
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Current proposal" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Invitations" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
          <Divider />
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Your loans" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Your certificates" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        <EthereumIcon />
      </div>
    );
  }
}

Home.propTypes = {
  id: PropTypes.string
};

// EXPORT COMPONENT

export { Home };
