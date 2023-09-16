import React, { useState } from 'react';
import { DashboardOutlined, FileTextOutlined, CalendarOutlined, SettingOutlined, BellOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu,Layout } from 'antd';
import styles from './navbar.module.css'
const { Header, Content } = Layout;
const leftItems = [
    {
        label: 'Dapp',
        key: 'dapp',
        icon: <DashboardOutlined />,
      },
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardOutlined />,
  },
  {
    label: 'Document',
    key: 'document',
    icon: <FileTextOutlined />,
  },
  {
    label: 'Calendar',
    key: 'calendar',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Collaborate',
    key: 'collaborate',
    icon: <TeamOutlined />,
  },
];

const rightItems = [
  {
    label: 'Notifications',
    key: 'notifications',
    icon: <BellOutlined />,
  },
  {
    label: 'Settings',
    key: 'settings',
    icon: <SettingOutlined />,
  },
  {
    label: 'User',
    key: 'user',
    icon: <UserOutlined />,
  },
];

const App = () => {
  const [current, setCurrent] = useState('dapp');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (

    <div className={styles['menu-container']} >
     
     <Menu style={{minWidth:1180}}   onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {leftItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
      <Menu  style={{minWidth:350}} onClick={onClick} mode="horizontal">
        {rightItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
     
    </div>
    
  );
};

export default App;