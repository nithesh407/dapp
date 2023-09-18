import React,{useState} from "react";
import { Navbar } from "../../component";
import { Button, Menu, Dropdown,Avatar, Card ,Modal,Input,Select,DatePicker,message,Upload} from 'antd';
import {DownOutlined,PlusOutlined,UploadOutlined,EditOutlined, SettingOutlined,SearchOutlined } from '@ant-design/icons'
import folder from "../../assets/folder.png"
const { Meta } = Card;
const { Option } = Select;
const LawyerDocument =()=>{
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

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [visible, setVisible] = useState(false);
  const [, setStartDate] = useState(null);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  // State for controlling the "Edit" modal
  const [editVisible, setEditVisible] = useState(false);
  const [description, setDescription] = useState(""); // Description input value

  // State for controlling the "Upload" modal
  const [uploadVisible, setUploadVisible] = useState(false);

  // Function to handle the "Settings" button click
  const handleSettingsClick = () => {
    setSettingsVisible(true);
  };

  // Function to handle the "Edit" button click
  const handleEditClick = () => {
    setEditVisible(true);
  };

  // Function to handle the "Upload" button click
  const handleUploadClick = () => {
    setUploadVisible(true);
  };

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
  const handleUploadFiles = () => {
    // Implement your file upload logic here
    setUploadVisible(false);
    message.success("Files uploaded successfully");
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

function handleMenuClick(e) {
  console.log('click', e);
}
const [fileList, setFileList] = useState([]);

const handleFileChange = ({ fileList }) => {
  // Handle file changes here, such as updating the state with selected files.
  setFileList(fileList);
};

const handleUpload = () => {
  // Handle the file upload logic here, such as sending the files to the server.
  // You can use the fileList state to access the selected files.
  console.log('Uploading files:', fileList);
  // You can implement your upload logic here.
  message.success('File uploaded successfully');
};
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

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">a - z</Menu.Item>
    <Menu.Item key="2">Date</Menu.Item>
    <Menu.Item key="3">Size</Menu.Item>
  </Menu>
);




    return(
    <div>
        <Navbar />
        <div style={{marginTop:70}}>
        <div style={{marginLeft:60,width:700}}>
        <Button  type="primary" onClick={showModal}>New <PlusOutlined></PlusOutlined></Button>
        <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        
        <Input placeholder="Enter Case Number" />
        <Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" onChange={handleChange}>
              {children}
            </Select>
            <DatePicker
              style={{ width: '100%', marginTop: 10 }}
              placeholder="Select Start Date"
              onChange={(date, dateString) => setStartDate(dateString)}
            />

<Upload
        customRequest={() => {}}
        onChange={handleFileChange}
        fileList={fileList}
        showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
      >
        <Button icon={<UploadOutlined />}>Select File(s)</Button>
      </Upload>

      <Button type="primary" onClick={handleUpload}>
        Upload
      </Button>  
      </Modal>

        <Button style={{marginLeft:10,width:100}}>Filter</Button>
        <Dropdown style={{marginLeft:10,width:100}} overlay={menu}>
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
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' ,marginLeft:50,marginRight:50,marginTop:50 }}>
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
      <Button onClick={handleUploadClick}><UploadOutlined key="edit" /></Button>,

      
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
      <Modal
        title="Upload Files"
        visible={uploadVisible}
        onOk={handleUploadFiles}
        onCancel={() => setUploadVisible(false)}
      >
        <Upload
          customRequest={() => {}}
          onChange={handleFileChange}
          fileList={fileList}
          showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
        >
          <Button icon={<UploadOutlined />}>Select File(s)</Button>
        </Upload>
      </Modal>
  
    
</div>
        
</div>
    
    )
}

export default LawyerDocument;