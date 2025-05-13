// src/components/AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="nav-left">
        <span>☰</span>
        <span className="brand">COMPLAINT MANAGEMENT SYSTEM</span>
      </div>
      <div className="nav-right">
        <Link to="/aDashboard" className="nav-link">DASHBOARD</Link>
        <Link to="/all-complaints" className="nav-link">ALL COMPLAINTS</Link>
        <Link to="/new-complaints" className="nav-link">NEW COMPLAINTS</Link>
        <Link to="/ongoing-complaints" className="nav-link">ON-GOING</Link>
        <Link to="/performance" className="nav-link">PERFORMANCE</Link>
        <Link to="/" className="nav-link">LOGOUT</Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
