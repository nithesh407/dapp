import { useEffect,useState }from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Notification,NfCalendar,ProfilePage, ClientSignup, JudgeSignup, LawyerSignup,LawyerDocument,ClientDocument,JudgeDocument,JudgeCollab,LawyerCollab} from './pages';
import { LawyerDashboard } from './userDashboard';
import Cookies from 'js-cookie';
import { ConfigProvider,theme } from 'antd';
import { AuthProvider, useAuth } from './Authenticate';
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

const ConditionalCollab = () => {
  const cookie=Cookies.get('role');
  switch (cookie) {
    case 'Lawyer':
      return <LawyerCollab />;
    case 'Judge':
      return <JudgeCollab />;
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
    console.log(Cookies.get('isAuthenticated'));
  }, []);

  // Effect to update CSS theme based on darkMode state
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);
  const PrivateRoute = ({ element, redirectTo }) => {
    const { isAuthenticated } = useAuth();
  
    if (isAuthenticated) {
      return <>{element}</>;
    } else {
      return <Navigate to={redirectTo || "/"} replace />;
    }
  };const BasicRoute = ({ element, redirectTo }) => {
    const { isAuthenticated } = useAuth();
  
    if (isAuthenticated) {
      return <Navigate to={redirectTo || "/dashboard"} replace />;
      
    } else {
      return <>{element}</>;
    }
  };

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

    <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/dashboard" element={<PrivateRoute element={<LawyerDashboard />}/>} />
          <Route path="/calendar" element={<PrivateRoute element={<NfCalendar />}/>} />
          <Route path="/user" element={<PrivateRoute element={<ProfilePage />}/>} />
          <Route path='/SignUp/client' element={<BasicRoute element={<ClientSignup/>}/>}/>
          <Route path='/SignUp/judge' element={<BasicRoute element={<JudgeSignup/>}/>}/>
          <Route path='/SignUp/lawyer' element={<BasicRoute element={<LawyerSignup/>}/>}/>
          <Route path="/document" element={<PrivateRoute element={<ConditionalRoute />}/>} />
          <Route path="/collaborate" element={<PrivateRoute element={<ConditionalCollab />}/>} />
        </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
    </ConfigProvider>
    </div>
  );
}

export default App;
