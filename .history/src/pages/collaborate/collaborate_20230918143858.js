import React from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Divider } from 'antd';

const Collaborate = () => {
  return (
    Divider
    <Navbar />
    <Row gutter={16}>
      <Col span={12}>
        <h1>Title</h1>
        <Button type="primary">Click Me</Button>
      </Col>
    </Row>
  );
}

export default Collaborate;
