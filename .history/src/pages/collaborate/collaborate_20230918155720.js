import React, { useState } from 'react';
import { Navbar } from '../../component';
import { Row, Col, Button, Card, Typography, Modal, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Profile from "../../assets/profile.png"

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
    console.log(`selected ${value}`);
    setSelectedPerson(value);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const filterOption = (input, option) =>
    (option?.props?.label ?? '').toLowerCase().includes(input.toLowerCase());

  const customOptionRenderer = (option) => {
    // Define your custom option rendering here
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={option.avatarSrc} // Add the source for the avatar image
          alt={option.label}
          style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '8px' }}
        />
        {option.label}
      </div>
    );
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
        <Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          style={{ width: '100%' }}
        >
          <Option value="jack" label="Jack" avatarSrc={Profile.}>
            Jack
          </Option>
          <Option value="lucy" label="Lucy" avatarSrc="url_to_lucy_avatar.jpg">
            Lucy
          </Option>
          <Option value="tom" label="Tom" avatarSrc="url_to_tom_avatar.jpg">
            Tom
          </Option>
        </Select>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button onClick={() => console.log('Button Clicked')} disabled={!selectedPerson}>
            Click Me
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Collaborate;
