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
  const [selectedPerson, setSelectedPerson] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedPerson(null); // Clear the selected person when closing the modal
  };

  const onChange = (value) => {
    // Handle selection change here
    console.log(`selected ${value}`);
    setSelectedPerson(value);
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

        {/* Conditionally render the button with the "primary" type */}
        {selectedPerson && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button type="primary" onClick={() => console.log('Button Clicked')}>
              Click Me
            </Button>
          </div>
        )}

        {/* You can place other content related to collaborators here */}
      </Modal>
    </div>
  );
};

export default Collaborate;
