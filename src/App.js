import React from 'react';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import { Login, Notification } from './pages';
import { Navbar } from './component';
import { ClientDashboard } from './userDashboard';
import { NfCalendar } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/calendar" element={<NfCalendar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
