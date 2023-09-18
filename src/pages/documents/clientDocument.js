import React from "react";
import { Navbar } from "../../component";
import { Button, Menu, Dropdown,Avatar, Card } from 'antd';
import {DownOutlined} from '@ant-design/icons'
import folder from "../../assets/folder.png"
const { Meta } = Card;

const ClientDocument =()=>{
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




    return(
    <div>
        <Navbar />
        <div style={{marginTop:70}}>
        <div style={{marginLeft:60,width:700}}>
       

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

export default ClientDocument;