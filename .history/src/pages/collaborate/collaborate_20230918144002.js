import React from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card } from 'antd';

const Collaborate = () => {
  return (
    <div>
    <Navbar />
    <Row gutter={16}>
      <Col span={18} offset={4}>
       <Card></Card>
      </Col>
    </Row>
    </div>
  );
}

export default Collaborate;
