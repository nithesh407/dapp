import React from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card,Typography } from 'antd';
const {Title}

const Collaborate = () => {
  return (
    <div>
    <Navbar />
    <Row gutter={16}>
      <Col span={15} offset={4}>
        
        <Title>Add Collaboraters</Title>
        <Button></Button>
       <Card></Card>
      </Col>
    </Row>
    </div>
  );
}

export default Collaborate;