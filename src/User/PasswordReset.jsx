import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SimpleNavbar from '../SimpleNavBar';

function PasswordReset() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (username && email && newPassword) {
      // Simulate success
      setMessage('Password reset successful! Redirecting to login...');

      // Redirect after 2.5 seconds
      setTimeout(() => {
        navigate('/login');
      }, 2500);
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <>
    <SimpleNavbar/>
    <div style={styles.container}>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset} style={styles.form}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <button type="submit">Reset Password</button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    background: '#f8f9fa',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  message: {
    marginTop: '15px',
    color: 'green',
    fontWeight: 'bold',
  }
};

export default PasswordReset;
