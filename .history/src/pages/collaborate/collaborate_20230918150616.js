import React, { useState } from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card, Typography, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Collaborate = () => {
  const divstyle = {
    margin: '50px'
  };

  // Step 2: Create a state variable to control the visibility of the modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Step 3: Define functions to handle the opening and closing of the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
              <Button type="primary" onClick={showModal}>
                <PlusOutlined /> Add People
              </Button>
            </Col>
          </Row>
          <Card></Card>
        </Col>
      </Row>
      <Modal
        title="Add Collaborators"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
       
        <p>Modal Content Goes Here</p>
      </Modal>
    </div>
  );
}

export default Collaborate;
