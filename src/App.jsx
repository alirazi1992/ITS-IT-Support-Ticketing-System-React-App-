// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import InspectionRequest from './pages/InspectionRequest';
import SurveyStatus from './pages/SurveyStatus';
import Certificates from './pages/Certificates'; // Tickets Page
import AssignedEngineer from './pages/AssignedEngineer'; // Engineer profile page
import EngineerDashboard from './pages/EngineerDashboard'; // ✅ Technician ticket control

const Welcome = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
    <div>
      <h1 className="text-4xl font-bold text-blue-700 mb-4">پنل پشتیبانی - ITS شروع شد!</h1>
      <p className="text-lg text-gray-700">به سامانه مدیریت درخواست‌های بازرسی خوش آمدید.</p>
    </div>
  </div>
);

const NotFound = () => (
  <div className="text-center text-red-500 mt-20 text-xl">
    صفحه‌ای با این آدرس یافت نشد ❌
  </div>
);

const App = () => {
  return (
    <Router>
      <div dir="rtl" className="flex bg-gray-100 min-h-screen text-gray-900 font-sans">
        <Sidebar />
        <div className="flex-1 pr-64 p-6">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/request" element={<InspectionRequest />} />
            <Route path="/status" element={<SurveyStatus />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/engineer/:id" element={<AssignedEngineer />} />
            <Route path="/engineer-dashboard/:name" element={<EngineerDashboard />} /> {/* ✅ NEW */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
