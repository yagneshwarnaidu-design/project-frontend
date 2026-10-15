import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [form, setForm] = useState({ username: 'admin', password: 'admin123' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(form.username, form.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Login to CareLink</h2>
      {error && <div className="alert error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div style={{ gridColumn: '1 / -1' }}>
            <label>Username</label>
            <input name="username" value={form.username} onChange={handleChange} required />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-footer">
          <button className="primary-button" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Login'}
          </button>
          <Link to="/register">Create account</Link>
        </div>
      </form>
    </div>
  );
}
