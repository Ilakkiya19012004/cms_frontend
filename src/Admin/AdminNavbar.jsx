// src/components/AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';

const AdminNavbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftSection}>
        <span style={{ marginRight: '10px' }}>☰</span>
        <span style={brandStyle}>COMPLAINT MANAGEMENT SYSTEM</span>
      </div>
      <div style={rightSection}>
        <Link to="/aDashboard" style={linkStyle}>DASHBOARD</Link>
        <Link to="/all-complaints" style={linkStyle}>ALL COMPLAINTS</Link>
        <Link to="/new-complaints" style={linkStyle}>NEW COMPLAINTS</Link>
        <Link to="/ongoing-complaints" style={linkStyle}>ON-GOING</Link>
        <Link to="/performance" style={linkStyle}>PERFORMANCE</Link>
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
  gap: '1.2rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '0.85rem',
  letterSpacing: '1px'
};

export default AdminNavbar;
