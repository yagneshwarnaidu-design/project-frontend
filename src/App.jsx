import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { useAuth } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import PrescriptionsPage from './pages/PrescriptionsPage';
import BillingPage from './pages/BillingPage';
import ReportsPage from './pages/ReportsPage';
import ProfilePage from './pages/ProfilePage';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading-shell">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <DashboardPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/patients"
        element={
          <ProtectedRoute>
            <Layout>
              <PatientsPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/doctors"
        element={
          <ProtectedRoute>
            <Layout>
              <DoctorsPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/appointments"
        element={
          <ProtectedRoute>
            <Layout>
              <AppointmentsPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/prescriptions"
        element={
          <ProtectedRoute>
            <Layout>
              <PrescriptionsPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/billing"
        element={
          <ProtectedRoute>
            <Layout>
              <BillingPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Layout>
              <ReportsPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Layout>
              <ProfilePage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
