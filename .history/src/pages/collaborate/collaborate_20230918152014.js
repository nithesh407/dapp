import React, { useState } from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card, Typography, Modal, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Collaborate = () => {
  const divstyle = {
    margin: '50px'
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

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
        {/* Add the search bar inside the modal */}
        <Input.Search
          placeholder="Search Collaborators"
          onSearch={(value) => {
            // Handle search functionality here
            console.log('Search:', value);
          }}
        />

        {/* You can place other content related to collaborators here */}
      </Modal>
    </div>
  );
}

export default Collaborate;
