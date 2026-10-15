import { useEffect, useState } from 'react';
import api from '../services/api';

export default function ReportsPage() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    api.get('/reports/summary')
      .then((response) => setSummary(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Reports</h3>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <h4>Patient registrations</h4>
          <strong>{summary.totalPatients ?? 0}</strong>
        </div>
        <div className="stat-card">
          <h4>Doctor count</h4>
          <strong>{summary.totalDoctors ?? 0}</strong>
        </div>
        <div className="stat-card">
          <h4>Appointments</h4>
          <strong>{summary.totalAppointments ?? 0}</strong>
        </div>
        <div className="stat-card">
          <h4>Revenue</h4>
          <strong>${Number(summary.totalRevenue ?? 0).toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
