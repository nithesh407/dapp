import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Notification,NfCalendar,LawyerSignup} from './pages';
import { ClientDashboard } from './userDashboard';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/dashboard" element={<ClientDashboard />} />
          <Route path="/calendar" element={<LawyerSignup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
