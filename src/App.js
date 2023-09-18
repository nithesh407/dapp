import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Notification,NfCalendar,ProfilePage } from './pages';
import { ClientDashboard,LawyerDashboard } from './userDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/LawyerDashboard" element={<LawyerDashboard />} />
          <Route path="/calendar" element={<NfCalendar />} />
          <Route path="/user" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
