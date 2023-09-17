import React, { useEffect } from 'react';
import { notification } from 'antd';
import { Navbar } from '../../component';
import { useNavigate } from 'react-router-dom';

const ClientDashboard = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  const openNotification = () => {
    const key = 'custom_notification';

    const onClick = () => {
      navigate('/notifications');
    };

    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 2,
      key: key,
      onClick: onClick,
    });
  };

  useEffect(() => {
    openNotification();
  }, []);
  return (
    <>
      {contextHolder}
      <Navbar />
    </>
  );
};

export default ClientDashboard;
