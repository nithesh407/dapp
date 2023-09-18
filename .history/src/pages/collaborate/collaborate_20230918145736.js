import React from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card,Typography } from 'antd';
import {PlusOutlined} from '@ant-design/icons';

const {Title}=Typography;

const Collaborate = () => {

    const divstyle={
        margin:'100px'

    };
  return (
    <div>
    <Navbar />
    <Row gutter={16} style={divstyle}>
      <Col span={16} offset={4}>
        
           <Row justify="space-between" align="middle">
              <Col>
                  <Title level={4}>Add Collaborators</Title>
              </Col>
              <Col>
                  <Button type="primary">
                 <PlusOutlined />Add People
                  </Button>
              </Col>
            </Row>
       <Card></Card>
      </Col>
    </Row>
    </div>
  );
}

export default Collaborate;
