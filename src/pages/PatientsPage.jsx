import { useEffect, useState } from 'react';
import api from '../services/api';

export default function PatientsPage() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get('/patients')
      .then((response) => setPatients(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Patients</h3>
        <button className="primary-button">Add patient</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {patients.length === 0 ? (
              <tr>
                <td colSpan="5">No patient records found.</td>
              </tr>
            ) : (
              patients.map((patient) => (
                <tr key={patient.id}>
                  <td>{patient.patientId}</td>
                  <td>{patient.firstName} {patient.lastName}</td>
                  <td>{patient.gender || '—'}</td>
                  <td>{patient.phone || '—'}</td>
                  <td>{patient.email || '—'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
