import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const initialState = {
  username: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  role: 'PATIENT'
};

export default function RegisterPage() {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await register(form);
      setSuccess('Registration successful. Redirecting to login...');
      setTimeout(() => navigate('/login'), 800);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div className="form-card">
      <h2>Create an account</h2>
      {error && <div className="alert error">{error}</div>}
      {success && <div className="alert success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label>Username</label>
            <input name="username" value={form.username} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
          </div>
          <div>
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>First name</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div>
            <label>Last name</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label>Role</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="PATIENT">Patient</option>
              <option value="RECEPTIONIST">Receptionist</option>
              <option value="DOCTOR">Doctor</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>

        <div className="form-footer">
          <button className="primary-button" type="submit">Register</button>
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
}
