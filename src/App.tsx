import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Missions from './pages/public/Missions';
import News from './pages/public/News';
import Services from './pages/public/Services';
import ComplaintForm from './pages/public/ComplaintForm';
import Contact from './pages/public/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ComplaintsList from './pages/admin/ComplaintsList';
import ComplaintDetail from './pages/admin/ComplaintDetail';
import CreateReport from './pages/admin/CreateReport';
import ReportsHistory from './pages/admin/ReportsHistory';
import UserManagement from './pages/admin/UserManagement';
import Settings from './pages/admin/Settings';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="missions" element={<Missions />} />
            <Route path="news" element={<News />} />
            <Route path="services" element={<Services />} />
            <Route path="complaint" element={<ComplaintForm />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="complaints" element={<ComplaintsList />} />
            <Route path="complaints/:id" element={<ComplaintDetail />} />
            <Route path="create-report" element={<CreateReport />} />
            <Route path="create-report/:complaintId" element={<CreateReport />} />
            <Route path="reports" element={<ReportsHistory />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;