import React, { useState } from 'react';
import { Card, Button, Modal, Form, Input, message, Upload } from 'antd';
import { EditOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const ProfilePage = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [name, setName] = useState(Cookies.get('name'));
  const [email, setEmail] = useState(Cookies.get('email'));

  const [avatar, setAvatar] = useState(null); // To store the selected avatar image
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate=useNavigate()
  const handleEditClick = () => {
    setIsEditModalVisible(true);
  };

  const handleEditModalOk = () => {
    // Validate the form before submitting
    form
      .validateFields()
      .then(() => {
        setIsEditModalVisible(false);
        message.success('Profile updated successfully!');
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo);
      });
  };

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false);
  };
  const backtoLogin=()=>{
      navigate('/')
  }

  const validateEmail = (rule, value, callback) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!value || emailPattern.test(value)) {
      callback();
    } else {
      callback('Invalid email format');
    }
  };


  const [form] = Form.useForm(); // Create a form instance

  // Handle avatar image upload
  const handleAvatarUpload = (info) => {
    if (info.file.status === 'done') {
      // Set the selected avatar image
      setAvatar(info.file.originFileObj);
    }
  };

  const handleButtonHover = () => {
    setIsButtonHovered(true);
  };

  const handleButtonLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Card
        style={{ width: 300 }}
        actions={[
          <Button type="default" onClick={backtoLogin} style={{ backgroundColor: 'red', color: 'white' }}>
            Logout
          </Button>,
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={handleEditClick}
          >
            Edit Profile
          </Button>,
        ]}
      >
        <div
          style={{
            textAlign: 'center',
            marginTop: '20px',
            position: 'relative',
          }}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <Upload
            showUploadList={false}
            beforeUpload={() => false} // Prevent file upload
            customRequest={({ onSuccess }) => setTimeout(() => onSuccess('ok'), 0)}
            onChange={handleAvatarUpload}
          >
            <Button
              size="large"
              shape="circle" // Set button shape to "circle"
              style={{
                marginBottom: '10px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: isButtonHovered ? 'black' : 'transparent',
                position: 'absolute',
                top: -28,
                left: 80,
              }}
            >
              {isButtonHovered ? (
                <div style={{ color: 'white' }}>
                  <EditOutlined style={{ fontSize: '24px' }} />
                  <div>Edit</div>
                </div>
              ) : avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  alt="Avatar"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              ) : (
                <UserOutlined style={{ fontSize: '40px', color: isButtonHovered ? 'white' : 'black' }} />
              )}
            </Button>
          </Upload>
        </div>
        <div style={{marginTop:'40px'}}><Meta title={name} description={email} /></div>
        
      </Card>

      <Modal
        title="Edit Profile"
        visible={isEditModalVisible}
        onOk={handleEditModalOk}
        onCancel={handleEditModalCancel}
      >
        <Form layout="vertical" form={form} requiredMark={false}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { validator: validateEmail },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          
        </Form>
      </Modal>
    </div>
  );
};

export default ProfilePage;
