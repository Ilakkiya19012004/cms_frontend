import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SimpleNavbar from './SimpleNavBar.jsx';

function ULogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "123") {
      navigate('/aLanding');
    } else {
      navigate('/udashboard');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate('/forgot-password');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <>
    <SimpleNavbar/>
    <div id="ulogin">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email address</label>
        <input
          type="email"
          name="uemail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="upassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div style={{ marginBottom: '10px', textAlign: 'right' }}>
          <button
            type="button"
            onClick={handleForgotPassword}
            style={{
              background: 'none',
              border: 'none',
              color: 'blue',
              textDecoration: 'underline',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Forgot Password?
          </button>
        </div>

        <button type="submit" disabled={!email || !password}>
          Login
        </button>
        <button onClick={handleRegister} type="button">
          Register
        </button>
      </form>
    </div>
    </>
  );
    
}

export default ULogin;
