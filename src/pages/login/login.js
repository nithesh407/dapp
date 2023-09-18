import React, { useState } from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import styles from './login.module.css'
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const Login = () => {
  const [form] = Form.useForm();
  const [showHiddenBox, setShowHiddenBox] = useState(false);

  const onGenderChange = (value) => {
    switch (value) {
      case 'Lawyer':
        form.setFieldsValue({
          note: 'Hi, Lawyer!',
        });
        break;
      case 'Judge':
        form.setFieldsValue({
          note: 'Hi, Judge!',
        });
        break;
      case 'Client':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };





  return (
    <div>
      <h1 className={styles['login-title']} >LOGIN</h1>
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      className={styles['login-container']}
    >
      <Form.Item
  name="Username"
  label="Username"
  rules={[
    {
      validator: (_, value) => {
        if (!value || value.length === 0) {
          return Promise.reject('Enter the username');
        }
        return Promise.resolve();
      },
    },
  ]}
>
  <Input placeholder="Enter Username" />
</Form.Item>

<Form.Item
  label="Password"
  name="password"
  rules={[
    {
      validator: (_, value) => {
        if (!value) {
          return Promise.reject('Enter the password');
        } else if (value.length === 10) {
          return Promise.reject('Password cannot be exactly 10 characters long!');
        }
        return Promise.resolve();
      },
    },
  ]}
>
  <Input.Password placeholder="Enter Password" />
</Form.Item>


<Form.Item
  name="Role"
  label="Role"
  rules={[
    {
      validator: (_, value) => {
        if (!value || value.length === 0) {
          return Promise.reject('Select a role');
        }
        return Promise.resolve();
      },
    },
  ]}
>
  <Select
    placeholder="Select a role"
    onChange={onGenderChange}
    allowClear
  >
    <Option value="Lawyer">Lawyer</Option>
    <Option value="Judge">Judge</Option>
    <Option value="Client">Client</Option>
    <Option value="Administrator">Administrator</Option>
  </Select>
</Form.Item>


      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.gender !== currentValues.gender
        }
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
        <Form.Item name="Mobile Number" class="button-container">
        {showHiddenBox && (
        <div className="otp-container" style={{marginLeft:157,maxWidth:"100%"}}>
          <Form.Item name="OTP" label="OTP">
          <div style={{ display:"flex" }}>
            <div>
            <Input placeholder=" Enter OTP" style={{width:200}} />
            </div>
            <div>
            <Button type="primary" style={{left:50}}>Verify OTP</Button>
            </div>
          </div>
          </Form.Item>
        </div>
        )}
        <div style={{display:"flex",marginLeft:"270px"}}>
        <div>
        <Button type="primary" onClick={() => setShowHiddenBox(!showHiddenBox)}  className="generate-otp-button">
        Generate OTP
        </Button>
        </div>
        <div>
        <Button type="primary" htmlType="submit" className={styles['login-button']}>
          Submit
        </Button>
        </div>
        </div>
       
        </Form.Item>

      </Form.Item>
      <Form.Item {...tailLayout}>
        
      </Form.Item>
    </Form>
    </div>
    
  );
};
export default Login;
