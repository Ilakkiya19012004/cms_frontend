import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LandingNav from './LandingNav.jsx';
function ALanding() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <LandingNav />
      <div className="container">
        <header>
          <h1>Service Agent Dashboard</h1>
        </header>
        <main>
          <h2>Manage Complaints Efficiently</h2>
          
          {/* Select City Dropdown */}
          <div>
            <label htmlFor="city">Select City:</label>
            <select id="city" value={selectedCity} onChange={handleCityChange}>
              <option value="">--Select City--</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
              <option value="city4">City 4</option>
            </select>
          </div>

          <p>Select an option to view and manage customer complaints:</p>
          <div className="button-grid">
            <Link to="/aDashboard" className="dashboard-btn">
              <span role="img" aria-label="all">📄</span>
              <p>Locate Service Center</p>
            </Link>
            <Link to="/aDashboard" className="dashboard-btn">
              <span role="img" aria-label="new">🆕</span>
              <p>Home Service</p>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default ALanding;
