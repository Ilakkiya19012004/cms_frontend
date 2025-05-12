// src/components/UserNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa'; // for menu icon (if needed)

const UserNavbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftSection}>
        <span style={{ marginRight: '10px' }}>☰</span>
        <span style={brandStyle}>COMPLAINT MANAGEMENT SYSTEM</span>
      </div>
      <div style={rightSection}>
        <Link to="/udashboard" style={linkStyle}>DASHBOARD</Link>
        <Link to="/complaint" style={linkStyle}>FILE COMPLAINT</Link>
        <Link to="/complaintStatus" style={linkStyle}>COMPLAINT STATUS</Link>
        <Link to="/feedback" style={linkStyle}>FEEDBACK</Link>
        <Link to="/" style={linkStyle}>LOGOUT</Link>
      </div>
    </nav>
  );
};

const navStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#000',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'sans-serif'
};

const leftSection = {
  display: 'flex',
  alignItems: 'center'
};

const brandStyle = {
  color: '#f1c40f',
  fontWeight: 'bold',
  fontSize: '1.2rem'
};

const rightSection = {
  display: 'flex',
  gap: '1.5rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '0.9rem',
  letterSpacing: '1px'
};

export default UserNavbar;
