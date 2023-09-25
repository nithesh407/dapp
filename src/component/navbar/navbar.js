import React, { useState, useEffect } from 'react';
import { DashboardOutlined, FileTextOutlined, CalendarOutlined, SettingOutlined, BellOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, Layout, Drawer, notification,List,Avatar,Popover,Button,Space,Collapse, Switch} from 'antd';
import { useLocation,useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../../assets/profile.png';
import { ProfilePage } from '../../pages';
import Cookies from 'js-cookie';


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

const App = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(getCurrentKeyFromLocation(location));
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [settings,setSettingsVisible]=useState(false);
  const [api, contextHolder] = notification.useNotification();

  const initialDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const navigate= useNavigate()
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
    window.location.reload();
  };
  function getCurrentKeyFromLocation(location) {
    const path = location.pathname;
    for (const item of leftItems) {
      if (path === '/' + item.key) {
        return item.key;
      }
    }
    return 'dashboard';
  }

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const onCloseDrawer = () => {
    
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
      <Menu style={{ minWidth: 1180}} onClick={onClick} selectedKeys={[current]} mode="horizontal">
  {leftItems.map((item) => {
    // Check if the role is not "Client" before rendering the "Collaborate" menu item
    if (item.key !== 'collaborate' || Cookies.get('role') !== 'Client') {
      return (
        <Menu.Item key={item.key} onClick={() => navigate('/' + item.key)} icon={item.icon}>
          {item.label}
        </Menu.Item>
      );
    }
    return null; // Return null to skip rendering "Collaborate" for clients
  })}
</Menu>

      <Menu style={{ minWidth: 350 }} onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item onClick={handleNotificationClick} icon={<BellOutlined/>}>Notification</Menu.Item>
        <Menu.Item onClick={()=>setSettingsVisible(true)} icon={<SettingOutlined/>}>Settings</Menu.Item>
        <Menu.Item >
          <Popover placement="bottomRight" title="User" content={<ProfilePage/>} trigger="click" okText="Yes" cancelText="No" >
        <Button style={{height:'100%',border:'0px'}}><img src={logo} height={30} width={30} /></Button>
        </Popover>
      </Menu.Item>
      </Menu>
      <Drawer
        title="Notifications"
        placement="right"
        onClose={()=>setDrawerVisible(false)}
        open={drawerVisible}
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
      <Drawer
        title="Settings"
        placement="left"
        onClose={()=>setSettingsVisible(false)}
        open={settings}
        extra={
          <Space>
            <Button onClick={()=>setSettingsVisible(false)}>Cancel</Button>
            <Button type="primary" onClick={()=>setSettingsVisible(false)}>
              Save
            </Button>
          </Space>
        }
      >
      <ProfilePage/>
      <Menu mode='inline'>
        <Menu.Item >
            Dark Mode  
            <Switch style={{marginLeft:10}}checked={darkMode} onChange={toggleDarkMode}/>
        </Menu.Item>

      </Menu>
      </Drawer>
      {contextHolder}
    </div>
  );
};

export default App;