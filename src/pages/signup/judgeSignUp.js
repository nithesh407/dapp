import React, { useState } from 'react';
import { Form, Input, Button, Select, Avatar } from 'antd';
import { MailOutlined, LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';

const { Option } = Select;

const Judge = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedCourt(null);
  };

  const handleCourtChange = (value) => {
    setSelectedCourt(value);
  };
  const optionsData = {
    TamilNadu: [ "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi (Tuticorin)",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"],
    Kerala:  [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad"
  ]
    // Add similar arrays for option3 to option20
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
          />
        </Form.Item>

        <Form.Item label="Select State" colon={false}>
          <Select
            style={{ width: '100%' }}
            placeholder="Select State"
            onChange={handleStateChange}
            value={selectedState}
          >
            {Object.keys(optionsData).map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Select Court Type" colon={false}>
          <Select
            style={{ width: '100%' }}
            placeholder="Select Court Type"
            onChange={handleCourtChange}
            value={selectedCourt}
          >
            <Option value="highCourt">High Court</Option>
            <Option value="districtCourt">District Court</Option>
          </Select>
        </Form.Item>

        {selectedCourt === "districtCourt" && selectedState && (
          <Form.Item label="Select District" colon={false}>
            <Select
              style={{ width: '100%' }}
              placeholder="Select District"
              
              
            >
              {optionsData[selectedState].map((value) => (
                <Option key={value} value={value}>
                  {value}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ margin: '80px', marginTop: '-90px' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Judge;