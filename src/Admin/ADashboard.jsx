import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';

function ADashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container">
      <header>
        <h1>Service Agent Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            float: 'right',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            padding: '10px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </header>
      <main>
        <h2>Manage Complaints Efficiently</h2>
        <p>Select an option to view and manage customer complaints:</p>
        <div className="button-grid">
          <Link to="/all-complaints" className="dashboard-btn">
            <span role="img" aria-label="all">📄</span>
            <p>View All Complaints</p>
          </Link>
          <Link to="/new-complaints" className="dashboard-btn">
            <span role="img" aria-label="new">🆕</span>
            <p>New Complaints</p>
          </Link>
          <Link to="/ongoing-complaints" className="dashboard-btn">
            <span role="img" aria-label="ongoing">🔄</span>
            <p>Ongoing Complaints</p>
          </Link>
          <Link to="/performance" className="dashboard-btn">
            <span role="img" aria-label="performance">📊</span>
            <p>Performance</p>
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}

export default ADashboard;
