import React, { useState } from "react";
import { Navbar } from "../../component";
import { Button, Menu, Dropdown, Avatar, Card, Input ,message ,Modal  } from 'antd';
import { DownOutlined, EditOutlined, SettingOutlined ,SearchOutlined    } from '@ant-design/icons'
import folder from "../../assets/folder.png"
const { Meta } = Card;
const ClientDocument = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);


  // Sample data, replace this with your actual data
  const caseData = [
    {
      id: 1,
      caseName: "Real estate",
      description: "real-estate case",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
    },
    {
      id: 2,
      caseName: "Land",
      description: "land case",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel"
    },
  ];
  
  // Function to handle collaboration
  

  // Function to handle saving edited description
 

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
     
        </div>
      </div>
    </div>
  );
}

export default ClientDocument;
