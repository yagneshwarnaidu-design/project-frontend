import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="hero">
      <div className="hero-card">
        <p className="eyebrow">Complete digital healthcare</p>
        <h1>Hospital management built for better patient care.</h1>
        <p>
          Manage appointments, patient records, prescriptions, billing, and reports from one secure platform.
        </p>

        <div className="action-row">
          <Link to="/login" className="primary-button">Login</Link>
          <Link to="/register" className="secondary-button">Register</Link>
        </div>

        <div className="feature-list">
          <div className="feature-item">
            <h3>Smart scheduling</h3>
            <p>Coordinate patient visits and avoid doctor overload.</p>
          </div>
          <div className="feature-item">
            <h3>Secure access</h3>
            <p>Role-based dashboards for admin, staff, doctors, and patients.</p>
          </div>
          <div className="feature-item">
            <h3>Easy records</h3>
            <p>Store patient documents and prescription history safely.</p>
          </div>
          <div className="feature-item">
            <h3>Financial insights</h3>
            <p>Track bills, payments, and hospital revenue reports.</p>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <h3>Why hospitals choose CareLink</h3>
        <ul>
          <li>Modern patient portal and dashboard</li>
          <li>Secure authentication</li>
          <li>Department and doctor management</li>
          <li>Appointment status tracking</li>
          <li>Prescription and billing modules</li>
          <li>Analytics and report generation</li>
        </ul>
      </div>
    </div>
  );
}
