import React from 'react';
import { Row,Avatar, Typography,Divider } from 'antd';
import UpcomingEvents from './UpcominEvents/UpcomingEvents';
import RecentActivity from './RecentActivity/RecentActivity';
const {Title} = Typography;
const LawyerDashboard  = () => {
  const lawyerName = 'John Doe'; 
  return (
    <>
      <Row align="middle" >
          <Avatar size={64} style={{ backgroundColor: '#1890ff',margin: 5 }}>
            {lawyerName[0].toUpperCase()}
          </Avatar>
          <Title level={2}>Welcome, {lawyerName}!</Title>
      </Row>  
      <Divider/>
      <UpcomingEvents/>
      <Divider/>
        <RecentActivity />
    
    </>
  );
};

export default LawyerDashboard;
