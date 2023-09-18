import React, { useState } from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card, Typography, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

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

  const onChange = (value) => {
    // Handle selection change here
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    // Handle search functionality here
    console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

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
        {/* Replace Input.Search with Select */}
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          style={{ width: '100%' }}
        >
          <Option value="jack" label="Jack">
            Jack
          </Option>
          <Option value="lucy" label="Lucy">
            Lucy
          </Option>
          <Option value="tom" label="Tom">
            Tom
          </Option>
        </Select>

        {/* Add a button inside the modal */}
        <Col style={{ marginTop: '20px', textAlign: 'center',width:'ma' }}>
          <Button onClick={() => console.log('Button Clicked')}>Click Me</Button>
        </Col>

        {/* You can place other content related to collaborators here */}
      </Modal>
    </div>
  );
};

export default Collaborate;
