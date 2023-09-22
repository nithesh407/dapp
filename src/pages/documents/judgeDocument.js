import React, { useState } from "react";
import { Navbar } from "../../component";
import { Button, Menu, Dropdown, Avatar, Card, Input ,message ,Modal  } from 'antd';
import { DownOutlined, EditOutlined, SettingOutlined ,SearchOutlined    } from '@ant-design/icons'
import folder from "../../assets/folder.png"
const { Meta } = Card;
const JudgeDocument = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [description, setDescription] = useState("");

  // Sample data, replace this with your actual data
  const caseData = [
    {
        id: 1,
        caseName: "Arjun",
        description: "Theft case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
      {
        id: 2,
        caseName: "Priya",
        description: "Land case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
      {
        id: 3,
        caseName: "Rajesh",
        description: "Civil case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
      {
        id: 4,
        caseName: "Pooja",
        description: "Criminal case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
      {
        id: 5,
        caseName: "Rahul",
        description: "Pocso case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
      {
        id: 6,
        caseName: "Ananya",
        description: "Civil case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
      {
        id: 7,
        caseName: "Suresh",
        description: "Criminal case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
      {
        id: 8,
        caseName: "Nithya",
        description: "Civil case",
        avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
      },
  ];
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

  // Function to filter cases based on search query
  const filterCases = () => {
    const filtered = caseData.filter(caseItem => {
      return caseItem.caseName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredCards(filtered);
  };

  // Call filterCases whenever searchQuery changes
  React.useEffect(() => {
    filterCases();
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: 40 }}>
        <div style={{ marginLeft: 60, width: 700 }}>
          

          <Button style={{ marginLeft: 10, width: 100 }}>Filter</Button>
          <Dropdown style={{ marginLeft: 10, width: 100 }} overlay={menu}>
            <Button>
              Sort <DownOutlined />
            </Button>
          </Dropdown>
          <Input
            style={{ marginLeft:1190, width: 200 }}
            placeholder="Search Case"
            prefix={<SearchOutlined />}
            onChange={(e) => setSearchQuery(e.target.value)}
            
          />
        </div>

        <div style={{ display: 'grid', margin: '30px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredCards.map(caseItem => (
            <div key={caseItem.id} style={{ width: '300px', marginBottom: 20}}>
              <Card
                style={{
                  border: '1px solid lightgrey'
                }}
                cover={
                  <img
                    alt="example"
                    src={folder}
                  />
                }
                actions={[
                    <Button onClick={handleSettingsClick}><SettingOutlined key="setting" /></Button>,
      <Button onClick={handleEditClick}><EditOutlined key="edit" /></Button>,
      
                  ]}
              >
                <Meta
                  avatar={<Avatar src={caseItem.avatar} />}
                  title={caseItem.caseName}
                  description={caseItem.description}
                />
              </Card>
            </div>
          ))}
            {/* Settings Modal */}
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

      {/* Upload Modal */}
     
        </div>
      </div>
    </div>
  );
}

export default JudgeDocument;
