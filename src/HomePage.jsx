import React from 'react';
import './HomePage.css'; // External CSS file
import heroImage from './assets/sony.png'; // Replace with actual path to your image
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); // ✅ Create navigation function

  const handleLoginClick = () => {
    navigate('/login'); // ✅ Navigate to /login route
  };
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">CMS</div>
        <nav className="nav">
          <ul>
            <li  onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
              <span className="icon">👤</span>Login</li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <img src={heroImage} alt="Woman using Sony product" className="hero-image" />
        <div className="overlay-box">
          <h1>Repair & Warranty</h1>
          <p>
            When you purchase a our product, you have the peace of mind in knowing that your product is
            covered by our standard manufacturer warranty.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
