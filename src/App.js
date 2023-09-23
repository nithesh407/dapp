import { useEffect,useState }from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Notification,NfCalendar,ProfilePage, ClientSignup, JudgeSignup, LawyerSignup,LawyerDocument,ClientDocument,JudgeDocument,Collaborate} from './pages';
import { LawyerDashboard } from './userDashboard';
import Cookies from 'js-cookie';
import { ConfigProvider,theme } from 'antd';

const ConditionalRoute = () => {
  const cookie=Cookies.get('role');
  switch (cookie) {
    case 'Lawyer':
      return <LawyerDocument />;
    case 'Client':
      return <ClientDocument />;
    case 'Judge':
      return <JudgeDocument />;
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Effect to update CSS theme based on darkMode state
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  return (
    <div
      style={{
        background: darkMode ? 'black' : 'white',
        height: 'calc(100vh - 40px)',
      }}
    >
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
    <BrowserRouter>
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/dashboard" element={<LawyerDashboard />} />
          <Route path="/calendar" element={<NfCalendar />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route path='/SignUp/client' element={<ClientSignup/>}/>
          <Route path='/SignUp/judge' element={<JudgeSignup/>}/>
          <Route path='/SignUp/lawyer' element={<LawyerSignup/>}/>
          <Route path="/document" element={<ConditionalRoute />} />
          <Route path="/collaborate" element={<Collaborate />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ConfigProvider>
    </div>
  );
}

export default App;
