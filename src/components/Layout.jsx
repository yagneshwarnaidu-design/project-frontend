import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const menuItems = [
  { label: 'Dashboard', path: '/dashboard', roles: ['ADMIN', 'DOCTOR', 'PATIENT', 'RECEPTIONIST'] },
  { label: 'Patients', path: '/patients', roles: ['ADMIN', 'DOCTOR', 'RECEPTIONIST', 'PATIENT'] },
  { label: 'Doctors', path: '/doctors', roles: ['ADMIN', 'DOCTOR', 'RECEPTIONIST'] },
  { label: 'Appointments', path: '/appointments', roles: ['ADMIN', 'DOCTOR', 'RECEPTIONIST', 'PATIENT'] },
  { label: 'Prescriptions', path: '/prescriptions', roles: ['ADMIN', 'DOCTOR'] },
  { label: 'Billing', path: '/billing', roles: ['ADMIN', 'RECEPTIONIST', 'PATIENT'] },
  { label: 'Reports', path: '/reports', roles: ['ADMIN', 'DOCTOR', 'RECEPTIONIST'] },
  { label: 'Profile', path: '/profile', roles: ['ADMIN', 'DOCTOR', 'RECEPTIONIST', 'PATIENT'] }
];

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const role = user?.roles?.[0] || 'PATIENT';
  const filteredMenu = menuItems.filter((item) => item.roles.includes(role));

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-box">
          <div className="brand-mark">+</div>
          <div>
            <h2>CareLink</h2>
            <span>Hospital Portal</span>
          </div>
        </div>

        <nav className="side-nav">
          {filteredMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Welcome back</p>
            <h3>{user?.firstName || 'User'} {user?.lastName || ''}</h3>
          </div>

          <div className="topbar-actions">
            <span className="role-badge">{role}</span>
            <button className="secondary-button" onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <div className="page-content">{children}</div>
      </main>
    </div>
  );
}
