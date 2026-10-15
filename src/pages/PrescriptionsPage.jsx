import { useEffect, useState } from 'react';
import api from '../services/api';

export default function PrescriptionsPage() {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    api.get('/prescriptions')
      .then((response) => setPrescriptions(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Prescriptions</h3>
        <button className="primary-button">Add prescription</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Prescription ID</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Diagnosis</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.length === 0 ? (
              <tr>
                <td colSpan="4">No prescriptions found.</td>
              </tr>
            ) : (
              prescriptions.map((item) => (
                <tr key={item.id}>
                  <td>{item.prescriptionId}</td>
                  <td>{item.patient?.firstName || 'N/A'} {item.patient?.lastName || ''}</td>
                  <td>{item.doctor?.firstName || 'N/A'} {item.doctor?.lastName || ''}</td>
                  <td>{item.diagnosis}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
