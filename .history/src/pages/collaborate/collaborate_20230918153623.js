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
  const [selectedCollaborator, setSelectedCollaborator] = useState(null); // To store the selected collaborator

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (value) => {
    // Handle selection change here
    setSelectedCollaborator(value);
  };

  const onSearch = (value) => {
    // Handle search functionality here
    console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const handleAddCollaborator = () => {
    // Handle adding the selected collaborator here
    console.log('Selected Collaborator:', selectedCollaborator);
    // You can perform any necessary actions here, such as adding the collaborator to a list or performing an API call.
    // Once the operation is complete, you can close the modal by calling handleCancel.
    handleCancel();
  };

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

        {selectedCollaborator && ( // Display the button only if a collaborator is selected
          <Button type="primary" onClick={handleAddCollaborator}>
            Add Selected Collaborator
          </Button>
        )}

        {/* You can place other content related to collaborators here */}
      </Modal>
    </div>
  );
};

export default Collaborate;
