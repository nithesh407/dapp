import React from 'react';
import { Card, Row, Col, Typography, Space } from 'antd';
import { CalendarOutlined, ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const eventsData = [
  {
    title: 'Legal Conference 2023',
    date: 'October 15, 2023',
    time: '9:00 AM - 5:00 PM',
    location: 'City Convention Center',
  },
  {
    title: 'Client Meeting - Case Review',
    date: 'October 20, 2023',
    time: '2:30 PM - 4:00 PM',
    location: 'Law Office, Room 203',
  },
  {
    title: 'Court Hearing - Case #12345',
    date: 'November 5, 2023',
    time: '10:00 AM - 11:30 AM',
    location: 'District Court, Room 7A',
  },
];

const UpcomingEvents = () => {
  return (
    <div style={{marginLeft:'200px'}}>
      <Title >Upcoming Events</Title>

      <Row gutter={10}>
        {eventsData.map((event, index) => (
          <Col span={6}  key={index}>
            <Card
              
              hoverable
              style={{ marginBottom: '16px',  height: '400px',marginLeft:'20px'}}
              cover={
                <img
                  alt={event.title}
                  src={`https://cache.careers360.mobi/media/article_images/2023/2/14/types-of-lawyers.webp`}
                />
              }
            >
              <Title level={4}>{event.title}</Title>
              <Space direction="vertical">
                <Text   >
                  <CalendarOutlined /> {event.date}
                </Text>
                <Text>
                  <ClockCircleOutlined /> {event.time}
                </Text>
                <Text>
                  <EnvironmentOutlined /> {event.location}
                </Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UpcomingEvents;