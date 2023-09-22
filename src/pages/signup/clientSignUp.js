import React, { useState } from 'react';
import { Form, Input, Button, Avatar } from 'antd';
import { MailOutlined, LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const ClientSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFinish = (values) => {
    console.log('Received values:', values);
  };
  const handleRegister = () => {
    // Create an object with the values from your component's state
    const formData = {
      name: name,
      email: email,
      mobileNumber: parseInt(mobileNumber),
      password: password,
      aadharNumber:aadharNumber
    };

    // Send the POST request using Axios
    axios.post('http://localhost:3010/client-submit', formData)
      .then((response) => {
        // Handle the response as needed
        console.log('Response:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
  };


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Avatar
        size={64}
        icon={<UserOutlined />}
        style={{ margin: '20px', marginRight: '-100px' }}
      />
      <Form
        name="registration-form"
        onFinish={onFinish}
        labelCol={{ span: 8, style: { colon: false } }}
        wrapperCol={{ span: 16 }}
        style={{ width: '450px' }}
        requiredMark={false}
      >
        {/* Name Input */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
          colon={false}
        >
          <Input
            prefix={<UserOutlined />}
            style={{ width: '100%' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        {/* Email Input */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Invalid email format!' },
          ]}
          colon={false}
        >
          <Input
            prefix={<MailOutlined />}
            style={{ width: '100%' }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        {/* Mobile Number Input */}
        <Form.Item
          label="Mobile Number"
          name="mobileNumber"
          rules={[
            { required: true, message: 'Please input your mobile number!' },
            {
              pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
              message: 'Invalid mobile number format!',
            },
          ]}
          colon={false}
        >
          <Input
            prefix={<PhoneOutlined />}
            style={{ width: '100%' }}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Form.Item>

        {/* Aadhar Number Input */}
        <Form.Item
          label="Aadhar Number"
          name="aadharNumber"
          rules={[
            { required: true, message: 'Please input your Aadhar number!' },
            {
              pattern: /^\d{12}$/,
              message: 'Invalid Aadhar number format! Aadhar number should be exactly 12 digits.',
            },
          ]}
          colon={false}
        >
          <Input
            prefix={<UserOutlined />}
            style={{ width: '100%' }}
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </Form.Item>

        {/* Password Input */}
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            style={{ width: '100%' }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        {/* Confirm Password Input */}
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match!');
              },
            }),
          ]}
          colon={false}
        >
          <Input.Password
            prefix={<LockOutlined />}
            style={{ width: '100%' }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={handleRegister} type="primary" htmlType="submit"  style={{ margin: '80px', marginTop: '-100px' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ClientSignup;
