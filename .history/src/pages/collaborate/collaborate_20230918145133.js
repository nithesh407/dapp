import React from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card,Typography } from 'antd';
import {PlusOutlined} from '@ant-design/icons';

const {Title}=Typography;

const Collaborate = () => {
  return (
    <div>
    <Navbar />
    <Row gutter={16}>
      <Col span={15} offset={4}>
        
      <Row justify="space-between" align="middle">
  <Col>
    <Title level={3}>Add Collaborators</Title>
  </Col>
  <Col>
    <Button type="primary">
      <PlusOutlined />
      Add People
    </Button>
  </Col>
</Row>
In this code:

We use the Row component to create a horizontal flex container.
We use the Col component to create two columns within the row.
justify="space-between" in the Row component ensures that the two columns are spaced evenly apart, pushing the <Title> to the left and the <Button> to the right.
align="middle" vertically aligns the content of both columns in the middle.
This code will create a flexible layout with the <Title> and <Button> elements aligned as specified. Adjust the justify and align props as needed to achieve the desired layout.






       <Card></Card>
      </Col>
    </Row>
    </div>
  );
}

export default Collaborate;
