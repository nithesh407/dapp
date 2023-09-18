import React from 'react';
import { Row,Avatar, Typography } from 'antd';
import { Navbar } from '../component';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import Statistics from './Statistics/Statistics';
const {Title} = Typography;
const LawyerDashboard  = () => {
  const lawyerName = 'John Doe'; 
  return (
    <>
      <Navbar/>

      <Row align="middle" style={{marginLeft:'200px',marginBottom:'30px'}} >
          <Avatar size={64} style={{ backgroundColor: '#1890ff',margin: 5 }}>
            {lawyerName[0].toUpperCase()}
          </Avatar>
          <Title level={2}>Welcome, {lawyerName}!</Title>
      </Row> 
      <div style={{marginLeft:'200px',marginBottom:'30px'}}>
      <Statistics/>
      </div> 
      <UpcomingEvents/>

    </>
  );
};

export default LawyerDashboard;