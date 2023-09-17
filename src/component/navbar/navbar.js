import React, { useState } from 'react';
import { DashboardOutlined, FileTextOutlined, CalendarOutlined, SettingOutlined, BellOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { useLocation } from 'react-router-dom'; // Import useLocation
import styles from './navbar.module.css';
import logo from '../../assets/profile.png';

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
    key:'user',
    icon: <img src={logo} height={30} width={30} style={{ marginTop: '5px', marginLeft: '10px' }} />,
  },
];

const App = () => {
  const location = useLocation(); // Get the current location (URL)
  const [current, setCurrent] = useState(getCurrentKeyFromLocation(location));

  // Function to extract the key from the location pathname
  function getCurrentKeyFromLocation(location) {
    const path = location.pathname;
    for (const item of leftItems.concat(rightItems)) {
      if (path === '/' + item.key) {
        return item.key;
      }
    }
    return 'dapp'; // Default key if no match is found
  }

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className={styles['menu-container']} >
      <Menu style={{ minWidth: 1180 }} onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {leftItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <a href={'/' + item.key}>{item.label}</a>
          </Menu.Item>
        ))}
      </Menu>
      <Menu style={{ minWidth: 350 }} onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {rightItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <a href={'/' + item.key}>{item.label}</a>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default App;
