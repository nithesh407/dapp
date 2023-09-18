import React, { useState } from 'react';
import { Badge, Calendar, Modal ,Button,Input,Radio, List} from 'antd';
import { Navbar } from '../../component';
import {UnorderedListOutlined} from '@ant-design/icons';
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event for 8th day.',
        },
        {
          type: 'success',
          content: 'This is usual event for 8th day.',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event for 10th day.',
        },
        {
          type: 'success',
          content: 'This is usual event for 10th day.',
        },
        {
          type: 'error',
          content: 'This is error event for 10th day.',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: 'This is warning event for 15th day',
        },
        {
          type: 'success',
          content: 'This is very long usual event for 15th day......',
        },
        {
          type: 'error',
          content: 'This is error event 1 for 15th day.',
        },
        {
          type: 'error',
          content: 'This is error event 2 for 15th day.',
        },
        {
          type: 'error',
          content: 'This is error event 3 for 15th day.',
        },
        {
          type: 'error',
          content: 'This is error event 4 for 15th day.',
        },
      ];
      break;
    default:
      // Handle other days if needed
      break;
  }
  return listData || [];
};

const Nfcalendar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nestedModalVisible, setNestedModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (value) => {
    setSelectedDate(value);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNestedModalClick = () => {
    setNestedModalVisible(true);
  };

  const closeNestedModal = () => {
    setNestedModalVisible(false);
  };
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  const dateCellRender = (value) => {
    return (
      <div onClick={() => handleDateClick(value)} className="date-cell" style={{ height: '70px' }}>
        {getListData(value).map((item, index) => (
          <Badge key={index} status={item.type} text={item.content} />
        ))}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div style={{ width: '75%', margin: '0 auto' }}>
        <Calendar dateCellRender={dateCellRender} />
      </div>
      <Modal
        title={`Events for ${selectedDate ? selectedDate.format('YYYY-MM-DD') : ''}`}
        open={modalVisible}
        onCancel={closeModal}
        footer={[
          <Button key="nestedModalButton" onClick={handleNestedModalClick}>
            Add Event
          </Button>,
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
      >
        {selectedDate && (
          <div>
            <p>Date: {selectedDate.format('YYYY-MM-DD')}</p>
            <List className="events">
              {getListData(selectedDate).map((item, index) => (
                <List.Item key={index}>
                  <Badge status={item.type} text={item.content} />
                  <Button type="danger" style={{backgroundColor:'#ff4d4f',color:'#ffffff'}}>Remove</Button>
                </List.Item>
              ))}
            </List>
          </div>
        )}
      </Modal>
      <Modal
        title="Event"
        centered
        open={nestedModalVisible}
        onCancel={closeNestedModal}
        footer={[
          <Button key="closeNested" onClick={closeNestedModal}>
            Close
          </Button>,
          <Button key="submit" type='primary'>
          Submit
        </Button>
        ]
      }
      >
        <Input
      placeholder="Enter the event"
      prefix={<UnorderedListOutlined />}
        />
        <br/>
        <br/>
        <div>
      <Radio.Group onChange={onChange} defaultValue="success">
        <Radio.Button value="success">Low</Radio.Button>
        <Radio.Button value="warning">Intermediate</Radio.Button>
        <Radio.Button value="error">High</Radio.Button>
      </Radio.Group>
    </div>
      </Modal>
    </>
  );
};


export default Nfcalendar;
