import React, { useState } from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card, Typography, Modal, Select, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Collaborate = () => {
  const divstyle = {
    margin: '50px'
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null); // Track the selected person
  const [cardContent, setCardContent] = useState(null); // Track the content of the Card

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedPerson(null); // Clear the selected person when the modal is closed
  };

  const onChange = (value) => {
    // Handle selection change here
    console.log(`selected ${value}`);
    setSelectedPerson(value); // Update the selected person
  };

  const onSearch = (value) => {
    // Handle search functionality here
    console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const handleButtonClick = () => {
    // Handle button click
    console.log('Button Clicked');
    
    // Set the content of the Card to the selected person
    setCardContent(selectedPerson);
  };

  const handleDeleteButtonClick = () => {
    // Handle delete button click
    setCardContent(null); // Clear the content of the Card
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
          <Card>
            {/* Display the selected value inside the Card */}
            {cardContent && (
              <Space>
                <p>Selected Person: {cardContent}</p>
                <Button
                  type="primary"
                  icon={<DeleteOutlined />}
                  onClick={handleDeleteButtonClick}
                />
              </Space>
            )}
          </Card>
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

        {/* Add a button inside the modal and conditionally enable/disable it */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button
          type='primary'
            onClick={handleButtonClick}
            disabled={!selectedPerson} // Disable the button if no person is selected
          >
            Click Me
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Collaborate;
