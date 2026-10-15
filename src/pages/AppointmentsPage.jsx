import { useEffect, useState } from 'react';
import api from '../services/api';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get('/appointments')
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Appointments</h3>
        <button className="primary-button">New appointment</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Doctor</th>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="6">No appointments scheduled.</td>
              </tr>
            ) : (
              appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.appointmentId}</td>
                  <td>{appointment.doctor?.firstName || 'N/A'} {appointment.doctor?.lastName || ''}</td>
                  <td>{appointment.patient?.firstName || 'N/A'} {appointment.patient?.lastName || ''}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.appointmentTime}</td>
                  <td>{appointment.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
