import React from 'react';
import { List, Avatar, Typography, Space, Button } from 'antd';
import {
  FileTextOutlined,
  EditOutlined,
  UserAddOutlined,
  EyeOutlined, 
} from '@ant-design/icons';

const { Text ,Title} = Typography;

const activityData = [
  {
    id: 1,
    type: 'file-upload',
    description: 'Document "Legal Agreement.pdf" uploaded',
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    type: 'case-update',
    description: 'Case #12345 updated by Lawyer Smith',
    timestamp: '1 day ago',
  },
  {
    id: 3,
    type: 'collaboration-invitation',
    description: 'Invitation from Judge Doe to collaborate on Case #54321',
    timestamp: '2 days ago',
  },
];

const getAvatar = (type) => {
    switch (type) {
      case 'file-upload':
        return <Avatar icon={<FileTextOutlined />} />;
      case 'case-update':
        return <Avatar icon={<EditOutlined />} />;
      case 'collaboration-invitation':
        return <Avatar icon={<UserAddOutlined />} />;
      default:
        return null;
    }
  };

const RecentActivity = () => {
  const handleNavigation = (activityId) => {
    // Implement navigation logic here
    console.log(`Navigating to activity ${activityId}`);
    // You can use React Router or any other navigation method as needed
  };

  return (
    <>
    <Title>Recent Activity</Title>
    <List
      itemLayout="horizontal"
      dataSource={activityData}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={getAvatar(item.type)}
            title={
              <Button
                type="link"
                icon={<EyeOutlined />}
                onClick={() => handleNavigation(item.id)} // Handle navigation on click
              >
                {item.description}
              </Button>
            }
            description={<Space><Text type="secondary">{item.timestamp}</Text></Space>}
          />
        </List.Item>
      )}
    />
    </>
  );
};


export default RecentActivity;
