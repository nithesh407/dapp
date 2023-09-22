import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Notification,NfCalendar,ProfilePage, ClientSignup, JudgeSignup, LawyerSignup,LawyerDocument,ClientDocument,JudgeDocument,Collaborate } from './pages';
import { LawyerDashboard } from './userDashboard';
import Cookies from 'js-cookie';

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
  
  return (
    <BrowserRouter>
      <div className="App">
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
  );
}

export default App;
