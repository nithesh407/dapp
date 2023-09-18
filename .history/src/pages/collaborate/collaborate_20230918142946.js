import React from 'react';
import { Row, Col, Button } from 'antd';

const Colla = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <h1>Title</h1>
        <Button type="primary">Click Me</Button>
      </Col>
    </Row>
  );
}

export default YourComponent;
