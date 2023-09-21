import React, { useState, useEffect } from "react";
import { Navbar } from "../../component";
import { Button, Menu, Dropdown, Avatar, Card, Select, Tag,message,Modal,Input } from 'antd';
import { DownOutlined, PlusOutlined, UploadOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons'
import folder from "../../assets/folder.png"
import DocumentModal from "./DocumentModal";
const { Meta } = Card;
const { Option } = Select;

const initialData = [
  {
    caseNumber: 'Case 1',
    startDate: '2023-09-21',
    tags: ['Tag1', 'Tag2'],
    title: 'Card title 1',
    imageUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
  },
  {
    caseNumber: 'Case 2',
    startDate: '2023-09-22',
    tags: ['Tag3', 'Tag4'],
    title: 'Card title 2',
    imageUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
  },
];

const LawyerDocument = () => {
  const [data, setData] = useState(initialData);

  const renderCards = () => {
    return (
      <div style={{ display: 'grid', margin: '30px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {data.slice().reverse().map((cardData, index) => (
          <div key={index}>
            <Card
              style={{
                border: '1px solid lightgrey',
              }}
              cover={<img alt="example" src={folder} />}
              actions={[
                <Button onClick={handleSettingsClick}><SettingOutlined key="setting" /></Button>,
      <Button onClick={handleEditClick}><EditOutlined key="edit" /></Button>,<UploadOutlined key="upload"/>
              ]}
            >
              <Meta
                avatar={<Avatar src={cardData.imageUrl} />}
                title={cardData.title}
                description={
                  <div>
                    Case Number: {cardData.caseNumber}<br />
                    Start Date: {cardData.startDate}<br />
                    {cardData.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
                  </div>
                }
              />
            </Card>
          </div>
        ))}
      </div>
    );
  };


  const caseTypes = [
    { prefix: "CR", name: "Criminal Cases" },
    { prefix: "CV", name: "Civil Cases" },
    { prefix: "FL", name: "Family Law Cases" },
    { prefix: "TR", name: "Traffic Violation Cases" },
    { prefix: "EM", name: "Employment Cases" },
    { prefix: "AD", name: "Administrative Cases" },
    { prefix: "EN", name: "Environmental Cases" },
    { prefix: "BK", name: "Bankruptcy Cases" },
    { prefix: "IM", name: "Immigration Cases" },
    { prefix: "IP", name: "Intellectual Property Cases" },
    { prefix: "PI", name: "Personal Injury Cases" },
    { prefix: "RE", name: "Real Estate Cases" },
    { prefix: "CP", name: "Consumer Protection Cases" },
    { prefix: "PR", name: "Probate and Estate Cases" },
    { prefix: "CA", name: "Class Action Lawsuits" },
    { prefix: "SC", name: "Small Claims Cases" },
    { prefix: "FC", name: "Federal Cases" },
    { prefix: "AP", name: "Appellate Cases" },
    { prefix: "IN", name: "International Cases" },
    // Add more case types here with prefixes
  ];

  const children = caseTypes.map((caseType) => (
    <Option key={caseType.prefix}>{`${caseType.prefix} - ${caseType.name}`}</Option>
  ));
  const handleFormData = (formData) => {
    const newElement = {
      caseNumber: formData.caseNumber,
      startDate: formData.date,
      tags: formData.tags,
      title: formData.caseName,
      imageUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
    };
    console.log('Received form data:', formData);
    setData([...data, newElement]);
    
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [description, setDescription] = useState("");
  const handleSettingsClick = () => {
    setSettingsVisible(true);
  };

  // Function to handle the "Edit" button click
  const handleEditClick = () => {
    setEditVisible(true);
  };

  // Function to handle the "Upload" button click


  // Function to handle deleting a document
  const handleDelete = () => {
    // Implement your delete logic here
    setSettingsVisible(false);
    message.success("Document deleted successfully");
  };

  // Function to handle collaboration
  const handleCollaborate = () => {
    // Implement your collaboration logic here
    setSettingsVisible(false);
    message.success("Collaboration request sent");
  };

  // Function to handle saving edited description
  const handleSaveEdit = () => {
    // Implement your save edit logic here
    setEditVisible(false);
    message.success("Description updated successfully");
  };

  // Function to handle file upload
 

  function handleMenuClick(e) {
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">a - z</Menu.Item>
      <Menu.Item key="2">Date</Menu.Item>
      <Menu.Item key="3">Size</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: 70 }}>
        <div style={{ marginLeft: 60, width: 700 }}>
          <DocumentModal onFormData={handleFormData}>{children}</DocumentModal>
          <Button style={{ marginLeft: 10, width: 100 }}>Filter</Button>
          <Dropdown style={{ marginLeft: 10, width: 100 }} overlay={menu}>
            <Button>
              Sort <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div>{renderCards()}</div>
      </div>
      <Modal
        title="Settings"
        visible={settingsVisible}
        onCancel={() => setSettingsVisible(false)}
        footer={[
          <Button key="delete" type="primary" onClick={handleDelete}>
            Delete
          </Button>,
          <Button key="collaborate" type="primary" onClick={handleCollaborate}>
            Collaborate
          </Button>,
        ]}
      >
        {/* Settings modal content */}
      </Modal>

      {/* Edit Modal */}
      <Modal
        title="Edit Description"
        visible={editVisible}
        onOk={handleSaveEdit}
        onCancel={() => setEditVisible(false)}
      >
        <Input
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal>

    </div>
    
  );
};

export default LawyerDocument;
