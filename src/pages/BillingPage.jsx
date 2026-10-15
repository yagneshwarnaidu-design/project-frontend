import { useEffect, useState } from 'react';
import api from '../services/api';

export default function BillingPage() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    api.get('/bills')
      .then((response) => setBills(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Billing</h3>
        <button className="primary-button">Generate bill</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Bill No.</th>
              <th>Patient</th>
              <th>Consultation</th>
              <th>Other charges</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bills.length === 0 ? (
              <tr>
                <td colSpan="6">No bills generated.</td>
              </tr>
            ) : (
              bills.map((bill) => (
                <tr key={bill.id}>
                  <td>{bill.billNumber}</td>
                  <td>{bill.patient?.firstName || 'N/A'} {bill.patient?.lastName || ''}</td>
                  <td>${Number(bill.consultationFee || 0).toFixed(2)}</td>
                  <td>${Number(bill.otherCharges || 0).toFixed(2)}</td>
                  <td>${Number(bill.totalAmount || 0).toFixed(2)}</td>
                  <td>{bill.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
