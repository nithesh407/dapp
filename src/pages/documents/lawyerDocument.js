import React,{useState} from "react";
import { Navbar } from "../../component";
import { Button, Menu, Dropdown,Avatar, Card ,Modal,Input,Select,DatePicker,message,Upload} from 'antd';
import {DownOutlined,PlusOutlined,UploadOutlined,EditOutlined, SettingOutlined } from '@ant-design/icons'
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
  const [visible, setVisible] = useState(false);
  const [, setStartDate] = useState(null);

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
        </div>
        
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            
        </div>
       
  
    </div>
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            <div>
            <Card
    style={{
      width: 300,
      marginTop:50,
      border:'1px solid lightgrey'
    }}
    cover={
      <img
        alt="example"
        src={folder}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <UploadOutlined key="upload"/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
            </div>
            
        </div>
       
  
    
</div>
        

    
    )
}

export default LawyerDocument;