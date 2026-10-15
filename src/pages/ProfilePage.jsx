import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <div className="panel">No profile loaded.</div>;
  }

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Profile</h3>
      </div>

      <div className="form-grid">
        <div>
          <label>Username</label>
          <input value={user.username || ''} readOnly />
        </div>
        <div>
          <label>Email</label>
          <input value={user.email || ''} readOnly />
        </div>
        <div>
          <label>First name</label>
          <input value={user.firstName || ''} readOnly />
        </div>
        <div>
          <label>Last name</label>
          <input value={user.lastName || ''} readOnly />
        </div>
        <div>
          <label>Phone</label>
          <input value={user.phone || ''} readOnly />
        </div>
        <div>
          <label>Roles</label>
          <input value={user.roles?.join(', ') || ''} readOnly />
        </div>
      </div>
    </div>
  );
}
