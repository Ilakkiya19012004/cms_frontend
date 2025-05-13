import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ULogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email==="admin@gmail.com"&&password==="123"){
      navigate('/adashboard');
    }
    else
      navigate('/udashboard');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
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

        <button onClick={handleLogin} type="submit" disabled={!email || !password}>
          Login
        </button>
        <button onClick={handleRegister} type="button">
          Register
        </button>
      </form>
    </div>
  );
}

export default ULogin;
