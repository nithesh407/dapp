import React from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card,Typography,Icon } from 'antd';
import {Plu} from '@ant-design/icons';

const {Title}=Typography;

const Collaborate = () => {
  return (
    <div>
    <Navbar />
    <Row gutter={16}>
      <Col span={15} offset={4}>
        
        <Title level={3}>Add Collaboraters</Title>
        <Button><PlusOutlined />Add </Button>
       <Card></Card>
      </Col>
    </Row>
    </div>
  );
}

export default Collaborate;
