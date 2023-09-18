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
  const [selectedPeople, setSelectedPeople] = useState([]); // Track selected people
  const [selectedPerson, setSelectedPerson] = useState(null); // Track the currently selected person

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedPerson(null); // Clear the currently selected person when the modal is closed
  };

  const onChange = (value) => {
    // Handle selection change here
    console.log(`selected ${value}`);
    setSelectedPerson(value); // Update the currently selected person
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
    
    if (selectedPerson) {
      setSelectedPeople([...selectedPeople, selectedPerson]); // Add the selected person to the array
      setSelectedPerson(null); // Clear the currently selected person
    }
  };

  const handleDeleteButtonClick = (index) => {
    // Handle delete button click
    const updatedPeople = [...selectedPeople];
    updatedPeople.splice(index, 1); // Remove the selected person from the array
    setSelectedPeople(updatedPeople); // Update the selected people array
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
            {/* Display the selected values vertically inside the Card */}
            <div>
              {selectedPeople.map((person, index) => (
                <div key={index}>
                  <p>{person}</p>
                  <Button
                    type="primary"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteButtonClick(index)}
                  />
                </div>
              ))}
            </div>
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
          value={selectedPerson}
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

        {/* Add a button inside the modal to add the selected person */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button
            onClick={handleButtonClick}
            disabled={!selectedPerson} // Disable the button if no person is selected
          >
            Add Person
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Collaborate;
