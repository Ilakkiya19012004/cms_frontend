import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingNav from './LandingNav.jsx';

function ALanding() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleNavigation = (path) => {
    if (!selectedCity) {
      setErrorMessage('Please select a city before proceeding.');
      setTimeout(() => setErrorMessage(''), 3000); // hide after 3 seconds
    } else {
      navigate(path);
    }
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

          {/* Error Message */}
          {errorMessage && (
            <div style={{ color: 'red', marginTop: '10px' }}>
              {errorMessage}
            </div>
          )}

          <p>Select an option to view and manage customer complaints:</p>
          <div className="button-grid">
            <button
              className="dashboard-btn"
              onClick={() => handleNavigation('/aDashboard')}
            >
              <span role="img" aria-label="all">📄</span>
              <p>Locate Service Center</p>
            </button>
            <button
              className="dashboard-btn"
              onClick={() => handleNavigation('/aDashboard')}
            >
              <span role="img" aria-label="new">🆕</span>
              <p>Home Service</p>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default ALanding;
