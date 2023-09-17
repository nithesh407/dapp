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
        <Form.Item name="Mobile Number" label="Mobile Number">
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="Enter Mobile Number" />
            <Button
              type="primary"
              onClick={() => setShowHiddenBox(!showHiddenBox)}
            >
              Generate OTP
            </Button>
          </Space.Compact>
        </Form.Item>
        {showHiddenBox && (
          <div>
            <Form.Item name="OTP" label="OTP">
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder=" Enter OTP" />
            <Button
              type="primary"
            >
              Verify OTP
            </Button>
          </Space.Compact>
        </Form.Item>
          </div>
        )}
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className={styles['login-button']}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};
export default Login;
