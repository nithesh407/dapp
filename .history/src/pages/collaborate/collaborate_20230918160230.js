import React, { useState } from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card, Typography, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
impo
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
    setSelectedPerson(null);
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

  // Create a custom option label with an image
  const customLabel = (value, label, imgSrc) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={imgSrc} alt={value} style={{ marginRight: '8px', width: '24px', height: '24px' }} />
      {label}
    </div>
  );

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
          style={{ width: '100%' }}
          labelInValue  // Enable labelInValue
        >
          <Option value="jack" label={customLabel('jack', 'Jack', '../../')}>
            Jack
          </Option>
          <Option value="lucy" label={customLabel('lucy', 'Lucy', '/path/to/lucy.jpg')}>
            Lucy
          </Option>
          <Option value="tom" label={customLabel('tom', 'Tom', '/path/to/tom.jpg')}>
            Tom
          </Option>
        </Select>

        {/* Add a button inside the modal and conditionally enable/disable it */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button
            onClick={() => console.log('Button Clicked')}
            disabled={!selectedPerson}
          >
            Click Me
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Collaborate;
