import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Notification,NfCalendar,ProfilePage, ClientSignup, JudgeSignup, LawyerSignup,LawyerDocument } from './pages';
import { ClientDashboard } from './userDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/calendar" element={<NfCalendar />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route path='/SignUp/client' element={<ClientSignup/>}/>
          <Route path='/SignUp/judge' element={<JudgeSignup/>}/>
          <Route path='/SignUp/lawyer' element={<LawyerSignup/>}/>
          <Route path="/document" element={<LawyerDocument />} />
          <Route path="/collaborate" element={<Col}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
