// src/components/ServiceType.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './ServiceType.css';
import UserNavbar from './UserNavbar';

function ServiceType() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleSelect = (option) => {
    setSelectedOption(option);

    // Navigate based on selected option
    if (option === 'Locate Service Center') {
      navigate('/complaint1');
    } else if (option === 'Home Service') {
      navigate('/complaint2');
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="service-type-container">
        <h2>Select Service Type</h2>

        <div className="button-group">
          <button
            className={`service-btn ${selectedOption === 'Locate Service Center' ? 'selected' : ''}`}
            onClick={() => handleSelect('Locate Service Center')}
          >
            Locate Service Center
          </button>

          <button
            className={`service-btn ${selectedOption === 'Home Service' ? 'selected' : ''}`}
            onClick={() => handleSelect('Home Service')}
          >
            Home Service
          </button>
        </div>
      </div>
    </>
  );
}

export default ServiceType;
