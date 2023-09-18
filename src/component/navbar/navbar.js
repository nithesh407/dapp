import React, { useState, useEffect } from 'react';
import { DashboardOutlined, FileTextOutlined, CalendarOutlined, SettingOutlined, BellOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, Layout, Drawer, notification,List,Avatar} from 'antd';
import { useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../../assets/profile.png';
import { ProfilePage } from '../../pages';
import { click } from '@testing-library/user-event/dist/click';
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
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 6',
  },
  {
    title: 'Ant Design Title 7',
  },
  {
    title: 'Ant Design Title 8',
  },
];
const rightItems = [
  {
    label: 'Settings',
    key: 'settings',
    icon: <SettingOutlined />,
  },
  {
    key: 'user',
    icon: <img src={logo} height={30} width={30} style={{ marginTop: '5px', marginLeft: '10px' }} />,
  },
];

const App = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(getCurrentKeyFromLocation(location));
  const [drawerVisible, setDrawerVisible] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  function getCurrentKeyFromLocation(location) {
    const path = location.pathname;
    for (const item of leftItems.concat(rightItems)) {
      if (path === '/' + item.key) {
        return item.key;
      }
    }
    return 'dapp';
  }

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleNotificationClick = () => {
    showDrawer();
    api.destroy('custom_notification');
  };

  useEffect(() => {
    const openNotification = () => {
      const key = 'custom_notification';

      const onClick = () => {
        showDrawer();
        api.destroy(key);
      };

      api.open({
        message: 'Notification Title',
        description:
          'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
        duration: 5,
        key: key,
        onClick: onClick,
      });
    };

    openNotification();
  }, [api]);

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
        <Menu.Item onClick={handleNotificationClick} icon={<BellOutlined/>}>Notification</Menu.Item>
        {rightItems.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            <a href={'/' + item.key}>{item.label}</a>
          </Menu.Item>
        ))}
        <Menu.Item >
          <Popover placement="bottomRight" title="User" content={<ProfilePage/>} trigger="click" okText="Yes" cancelText="No" >
        <Button style={{height:'100%',border:'0px'}}><img src={logo} height={30} width={30} /></Button>
        </Popover>
      </Menu.Item>
      </Menu>
      <Drawer
        title="Drawer Title"
        placement="right"
        onClose={onCloseDrawer}
        visible={drawerVisible}
      >
        <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={logo} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
      </Drawer>
      {contextHolder}
    </div>
  );
};

export default App;
