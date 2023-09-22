import React, { useState } from 'react';
import { Badge, Calendar, Modal, Button, Input, Radio, List } from 'antd';
import { Navbar } from '../../component';
import { UnorderedListOutlined } from '@ant-design/icons';

const Nfcalendar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [nestedModalVisible, setNestedModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventText, setEventText] = useState('');
  const [selectedRadioValue, setSelectedRadioValue] = useState('success');
  const [events, setEvents] = useState({}); // State variable to store events

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

  const handleAddEvent = () => {
    if (selectedDate) {
      // Get the events for the selected date or create an empty array
      const dateKey = selectedDate.format('YYYY-MM-DD');
      const dateEvents = events[dateKey] || [];
      const newItem = {
        type: selectedRadioValue,
        content: eventText,
      };
      // Add the new event to the array of events for the selected date
      dateEvents.push(newItem);
      // Update the events state with the new events
      setEvents({
        ...events,
        [dateKey]: dateEvents,
      });
      setEventText('');
      setSelectedRadioValue('success');
    }
    closeNestedModal();
  };

  const handleRemoveEvent = (dateKey, eventIndex) => {
    const dateEvents = events[dateKey] || [];
    // Remove the event at the specified index
    dateEvents.splice(eventIndex, 1);
    // Update the events state
    setEvents({
      ...events,
      [dateKey]: dateEvents,
    });
  };

  function onChange(e) {
    console.log(`radio checked: ${e.target.value}`);
    setSelectedRadioValue(e.target.value);
  }

  const dateCellRender = (value) => {
    const dateKey = value.format('YYYY-MM-DD');
    const dateEvents = events[dateKey] || [];

    return (
      <div onClick={() => handleDateClick(value)} className="date-cell" style={{ height: '70px' }}>
        {dateEvents.map((item, index) => (
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
              {events[selectedDate.format('YYYY-MM-DD')]?.map((item, index) => (
                <List.Item key={index}>
                  <Badge status={item.type} text={item.content} />
                  <Button
                    type="danger"
                    style={{ backgroundColor: '#ff4d4f', color: '#ffffff' }}
                    onClick={() => handleRemoveEvent(selectedDate.format('YYYY-MM-DD'), index)}
                  >
                    Remove
                  </Button>
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
          <Button key="submit" type="primary" onClick={handleAddEvent}>
            Add
          </Button>,
        ]}
      >
        <Input
          placeholder="Enter the event"
          prefix={<UnorderedListOutlined />}
          value={eventText}
          onChange={(e) => setEventText(e.target.value)} // Update the eventText state
        />
        <br />
        <br />
        <div>
          <Radio.Group onChange={onChange} defaultValue="success" value={selectedRadioValue}>
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