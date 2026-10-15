import { useEffect, useState } from 'react';
import api from '../services/api';

export default function DashboardPage() {
  const [summary, setSummary] = useState({});

  useEffect(() => {
    api.get('/reports/summary')
      .then((response) => setSummary(response.data))
      .catch((error) => console.error(error));
  }, []);

  const cards = [
    { title: 'Patients', value: summary.totalPatients ?? 0 },
    { title: 'Doctors', value: summary.totalDoctors ?? 0 },
    { title: 'Appointments', value: summary.totalAppointments ?? 0 },
    { title: 'Revenue', value: `$${Number(summary.totalRevenue ?? 0).toFixed(2)}` }
  ];

  return (
    <>
      <div className="stat-grid">
        {cards.map((card) => (
          <div className="stat-card" key={card.title}>
            <h4>{card.title}</h4>
            <strong>{card.value}</strong>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="panel-header">
          <h3>Hospital overview</h3>
        </div>
        <p>
          Pending appointments: <strong>{summary.pendingAppointments ?? 0}</strong>
        </p>
        <p>
          Monitor patient registrations, physician capacity, and financial health through the reports section.
        </p>
      </div>
    </>
  );
}
