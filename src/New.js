import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
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
const New = () => {
  const [form] = Form.useForm();
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
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,marginLeft: '400px',marginTop: '150px',position: "relative"
      }}
    >
      <Form.Item
        name="Username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder='Enter Username'/>
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
      <Input.Password placeholder='Enter Password' />
    </Form.Item>
      <Form.Item
        name="Role  "
        label="Role   "
        rules={[
          {
            required: true,
          },
        ]} style={{marginRight:'10px'}}
      >
        <Select
          placeholder="Select a role"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="Lawyer">Lawyer</Option>
          <Option value="Judge">Judge</Option>
          <Option value="Client">Client</Option>
          <Option value="Client">Administrator</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
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
        <Form.Item name="FPA"
        label="FPA">
         <Space.Compact style={{ width: '100%'}}>
      <Input  placeholder="Enter FPA"/>
      
      <Button type="primary">Generate FPA</Button>
    </Space.Compact>
    </Form.Item>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ marginLeft:'90px'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default New;