import React, { useState } from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card, Typography, Modal, Select } from 'antd';
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
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false); // Track the delete confirmation modal visibility
  const [deleteConfirmIndex, setDeleteConfirmIndex] = useState(null); // Track the index of the person to delete

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

  const showDeleteConfirm = (index) => {
    // Display the delete confirmation modal
    setDeleteConfirmVisible(true);
    setDeleteConfirmIndex(index); // Set the index of the person to delete
  };

  const handleDeleteConfirm = () => {
    // Handle delete confirmation
    const updatedPeople = [...selectedPeople];
    updatedPeople.splice(deleteConfirmIndex, 1); // Remove the selected person from the array
    setSelectedPeople(updatedPeople); // Update the selected people array
    setDeleteConfirmVisible(false); // Close the delete confirmation modal
  };

  const handleDeleteCancel = () => {
    // Cancel delete confirmation
    setDeleteConfirmVisible(false);
    setDeleteConfirmIndex(null);
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
            {/* Display the selected values and associated delete buttons in the same line */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {selectedPeople.map((person, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <p style={{ flex: 1, marginRight: '10px' }}>{person}</p>
                  <Button
                    type="primary"
                    icon={<DeleteOutlined />}
                    onClick={() => showDeleteConfirm(index)}
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

      {/* Delete confirmation modal */}
      <Modal
        title="Delete Confirmation"
        visible={deleteConfirmVisible}
        onOk={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      >
        Are you sure you want to delete this person?
      </Modal>
    </div>
  );
};

export default Collaborate;
