import { useEffect, useState } from 'react';
import api from '../services/api';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    api.get('/doctors')
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Doctors</h3>
        <button className="primary-button">Add doctor</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>Availability</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {doctors.length === 0 ? (
              <tr>
                <td colSpan="5">No doctors available.</td>
              </tr>
            ) : (
              doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>{doctor.doctorId}</td>
                  <td>{doctor.firstName} {doctor.lastName}</td>
                  <td>{doctor.specialization || '—'}</td>
                  <td>{doctor.availability || '—'}</td>
                  <td>{doctor.experience ?? 0} yrs</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
