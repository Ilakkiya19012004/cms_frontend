// src/components/UserNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar.css'; // ⬅ Import the CSS

const UserNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span>☰</span>
        <span className="brand">ELECTRO CARE</span>
      </div>
      <div className="nav-right">
        <Link to="/udashboard" className="nav-link">DASHBOARD</Link>
        <Link to="/service-type" className="nav-link">FILE COMPLAINT</Link>
        <Link to="/complaintStatus" className="nav-link">COMPLAINT STATUS</Link>
        <Link to="/feedback" className="nav-link">FEEDBACK</Link>
        <Link to="/" className="nav-link">LOGOUT</Link>
      </div>
    </nav>
  );
};

export default UserNavbar;
