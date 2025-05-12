import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UDashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = (e) => {
      e.preventDefault();
        navigate('/');
    };
  return (
    <div className="container">
      <header>
        <h1>Complaint Management Dashboard</h1>
        <button onClick={handleLogout} style={{ float: 'right', backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
          Logout
        </button>
      </header>
      <main>
        <h2>Welcome to your Dashboard</h2>
        <p>Use the options below to navigate:</p>
        <div className="button-grid">
          <Link to="/complaint" className="dashboard-btn">
            <span role="img" aria-label="file">📝</span>
            <p>File Complaint</p>
          </Link>
          <Link to="/complaintStatus" className="dashboard-btn">
            <span role="img" aria-label="status">📋</span>
            <p>View Status</p>
          </Link>
          <Link to="/feedback" className="dashboard-btn">
            <span role="img" aria-label="feedback">⭐</span>
            <p>Give Feedback</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;