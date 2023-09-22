
import React, { useState } from 'react';
import { Form, Input, Button, Select, Avatar } from 'antd';
import { MailOutlined, LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Option } = Select;

const LawyerSignup = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [barID, setBarID] = useState(0);
  const [selectedState, setSelectedState] = useState(''); // Initialize with an empty string or a default value
const [selectedCourt, setSelectedCourt] = useState(''); // Initialize with an empty string or a default value
 const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedCourt(null);
    console.log(selectedState);
  };

  const handleCourtChange = (value) => {
    setSelectedCourt(value);
  };
  const handleRegister = () => {
    // Create an object with the values from your component's state
    const formData = {
      name: name,
      email: email,
      mobileNumber: parseInt(mobileNumber),
      password: password,
      barID: barID,
      selectedState: selectedState,
      selectedCourt: selectedCourt,
      selectedDistrict: selectedDistrict,
    };
    console.log(formData,selectedState);
    // Send the POST request using Axios
    axios.post('http://localhost:3001/submit-form', formData)
      .then((response) => {
        // Handle the response as needed
        console.log('Response:', response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error:', error);
      });
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

        <Form.Item
          label="Bar ID"
          name="barID"
          rules={[
            { required: true, message: 'Please input your Bar ID!' },
          ]}
          colon={false}
        >
          <Input
            style={{ width: '100%' }}
            value={barID}
            onChange={(e) => setBarID(e.target.value)}
          />
        </Form.Item>

        {/* Conditional rendering for Select State */}
        <Form.Item label="Select State" colon={false}>
          <Select
            style={{ width: '100%' }}
            placeholder="Select State"
            onChange={handleStateChange} // This should correctly update selectedState
            value={selectedState}
          >
            {Object.keys(optionsData).map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Conditional rendering for Select Court Type */}
        <Form.Item label="Select Court Type" colon={false}>
          <Select
            style={{ width: '100%' }}
            placeholder="Select Court Type"
            onChange={handleCourtChange} // This should correctly update selectedState
            value={selectedCourt}
          >
            <Option value="highCourt">High Court</Option>
            <Option value="districtCourt">District Court</Option>
          </Select>
        </Form.Item>

        {/* Conditional rendering for Display District Input */}
        {selectedCourt === 'districtCourt' && (
          <Form.Item label="Select District" colon={false}>
            <Select
              style={{ width: '100%' }}
              placeholder="Select District"
              value={selectedDistrict}
              onChange={(value) => setSelectedDistrict(value)}
            >
              {selectedState && optionsData[selectedState].map((value) => (
                <Option key={value} value={value}>
                  {value}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" onClick={handleRegister} htmlType="submit" style={{ margin: '80px', marginTop: '-100px' }}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );

};

export default LawyerSignup;