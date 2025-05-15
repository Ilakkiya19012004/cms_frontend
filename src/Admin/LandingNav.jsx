import React from 'react';
import { Link } from 'react-router-dom';

const SimpleNavbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftSection}>
        <span style={brandStyle}>ELECTRO CARE</span>
      </div>
      <div style={rightSection}>
        <Link to="/" style={linkStyle}>Logout</Link>
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

export default SimpleNavbar;
