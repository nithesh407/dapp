import React from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const onSearch = (value) => {
  console.log('search:', value);
};

const onChange = (value) => {
  console.log('Selected:', value);
};

const New = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <>
      <Form.Item
        label="Role"
        name="Roles"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Select
          showSearch
          placeholder="Select your role"
          optionFilterProp="role"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={[
            {
              value: 'Judge',
              label: 'Judge',
            },
            {
              value: 'Lawyer',
              label: 'Lawyer',
            },
            {
              value: 'Client',
              label: 'Client',
            },
            {
                value: 'Administrator',
                label: 'Administrator',
            },
          ]}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
      
    >
    </Form.Item>
    <Checkbox>Remember me</Checkbox>
    </>
  </Form> 
);
export default New;    






