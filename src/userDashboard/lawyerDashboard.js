import React, { useState } from 'react';
import { Row, Avatar, Typography, Modal, Button, Form, Input } from 'antd';
import { Navbar } from '../component';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import Statistics from './Statistics/Statistics';

const { Title } = Typography;

const LawyerDashboard = () => {
  const lawyerName = 'John Doe';
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSendEmail = () => {
    form
      .validateFields()
      .then((values) => {
        // Implement your logic to send the email using the values object
        // You can use an API call or any other method to send the email
        // After sending the email, you can close the modal by calling handleCancel()
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  return (
    <>
      <Navbar />

      <Row align="middle" style={{ marginLeft: '200px', marginBottom: '30px' }}>
        <Avatar size={64} style={{ backgroundColor: '#1890ff', margin: 5 }}>
          {lawyerName[0].toUpperCase()}
        </Avatar>
        <Title level={2}>Welcome, {lawyerName}!</Title>
      </Row>
      <div style={{ marginLeft: '200px', marginBottom: '30px' }}>
        <Statistics />
      </div>
      <UpcomingEvents />

      {/* Communication Bubble */}
      <Button
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          background: '#1890ff',
          color: 'white',
          borderRadius: '10%',
          width: 150,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={showModal}
      >
        <span>Communicate</span>
      </Button>

      {/* Email Modal */}
      <Modal
        title="Compose Email"
        visible={isModalVisible}
        onOk={handleSendEmail}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSendEmail}>
            Send
          </Button>,
        ]}
        style={{
          position: 'fixed',
          top: 'auto',
          left: 'auto',
          right: 60, // Adjust the right position as needed
          bottom: 70, // Adjust the bottom position as needed
        }}
        width={500} // Adjust the width as needed
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="sender"
            label="From"
            rules={[{ required: true, message: 'Please enter the sender email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="receiver"
            label="To"
            rules={[{ required: true, message: 'Please enter the receiver email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="subject" label="Subject">
            <Input />
          </Form.Item>
          <Form.Item name="message" label="Message">
            <Input.TextArea rows={6} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LawyerDashboard;